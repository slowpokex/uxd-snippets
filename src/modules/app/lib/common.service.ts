/**
 * Common base service
 **/

export class CommonService<Type extends Document, DtoType> {
    Model: any;

    constructor(Model) {
        this.Model = Model;
    }

    /**
     * Create new Model from commonDto body
     * @param {CreateDtoType} commonDto - object for creating
     * @returns {Promise}
     */
    async create(commonDto: DtoType): Promise<DtoType> {
        const commonModel = new this.Model(commonDto);
        return await commonModel.save();
    }

    /**
     * Count Model instances
     * @param {DtoType} commonDto - input DTO for count
     * @returns {number} - count of instances
     */
    async count(commonDto: DtoType) {
        return await this.Model.find(commonDto).count().exec();
    }

    /**
     * Find all instances
     * @returns {Promise}
     */
    async findAll(): Promise<Type[]> {
        return await this.Model.find().exec();
    }

    /**
     * Find one instance
     * @param {DtoType} commonDto - input DTO for search
     * @returns {Promise}
     */
    async findOne(commonDto: DtoType): Promise<Type> {
        return await this.Model.findOne(commonDto).exec();
    }

    /**
     * Find instances by ID
     * @param {number|string} id - id of Type
     * @returns {Promise}
     */
    async findById(id: number|string): Promise<Type> {
        return await this.Model.findById(id).exec();
    }

    /**
     * Update
     * @param {number|string} id - id for updating
     * @param {DtoType} commonDto - input DTO for updating
     * @returns {Promise}
     */
    async update(id: number|string, commonDto: DtoType) {
        return await this.Model.update({ _id: id, ...commonDto }).exec();
    }

    /**
     * Remove instances
     * @param {number|string} id - id for removing
     * @returns {Promise}
     */
    async remove(id: number|string) {
        return await this.Model.remove({ _id: id }).exec();
    }
}
