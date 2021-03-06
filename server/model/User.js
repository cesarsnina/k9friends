const { db, DataTypes, Model } = require('../db');

class User extends Model {};

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    buf: DataTypes.BLOB
},{
    sequelize: db,
    timestamps: false,
});

module.exports = User;
