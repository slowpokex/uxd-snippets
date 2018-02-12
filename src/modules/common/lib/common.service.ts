/**
 * Common base service
 * */
export class CommonService<Type, DtoType> {
    constructor(Schema) {
        this.Schema = Schema;
    }

    /**
     * Create new schema from commonDto body
     * @param {CreateDtoType} commonDto - object for creating
     * @returns {Promise}
     */
    async create(commonDto: DtoType): Promise<DtoType> {
        const commonModel = new this.Schema(commonDto);
        return await commonModel.save();
    }

    /**
     * Count schema instances
     * @param {DtoType} commonDto - input DTO for count
     * @returns {number} - count of instances
     */
    async count(commonDto: DtoType) {
        return await this.Schema.find(commonDto).count().exec();
    }

    /**
     * Find all instances
     * @returns {Promise}
     */
    async findAll(): Promise<Type[]> {
        return await this.Schema.find().exec();
    }

    /**
     * Find one instance
     * @param {DtoType} commonDto - input DTO for search
     * @returns {Promise}
     */
    async findOne(commonDto: DtoType): Promise<Type> {
        return await this.Schema.findOne(commonDto).exec();
    }

    /**
     * Find instances by ID
     * @param {number|string} id - id of Type
     * @returns {Promise}
     */
    async findById(id): Promise<Type> {
        return await this.Schema.findById(id).exec();
    }

    /**
     * Update instances
     * @param {DtoType} commonDto - input DTO for updating
     * @returns {Promise}
     */
    async update(commonDto: DtoType) {
        return await this.Schema.update(commonDto).exec();
    }

    /**
     * Remove instances
     * @param {DtoType} commonDto - input DTO for removing
     * @returns {Promise}
     */
    async remove(commonDto: DtoType) {
        return await this.Schema.remove(commonDto).exec();
    }
}
