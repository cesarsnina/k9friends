const { db, DataTypes, Model } = require('../db');

class Dog extends Model {}

Dog.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
},{
    sequelize: db,
    timestamps: false,
})

module.exports = Dog;
