import { Schema } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';
import { promisify } from 'util';
import { UserRoles } from '../enums/user-roles.enum';

const genSaltAsync = promisify(genSalt);
const hashAsync = promisify(hash);
const compareAsync = promisify(compare);

const SALT_WORK_FACTOR = 10;

export const UserSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 128
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    displayName: {
        type: String,
        default: 'Anonymous'
    },
    email: {
        type: String
    },
    role: {
        type: String,
        enum: Object.values(UserRoles),
        default: UserRoles.GUEST
    },
    lastModifiedDate: Date,
});

UserSchema.pre('save', function (next) {
    const user = this;
    user.lastModifiedDate = new Date();
    if (!user.isModified('password')) {
        return next();
    }
    return genSaltAsync(SALT_WORK_FACTOR)
        .then(salt => hashAsync(user.password, salt))
        .then((hashValue) => {
            user.password = hashValue;
            next();
        }).catch(err => next(err));
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    return compareAsync(candidatePassword, this.password)
        .then(isMatch => cb(null, isMatch))
        .catch(err => cb(err));
};
