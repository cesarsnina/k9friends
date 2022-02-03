const { db, DataTypes, Model } = require('../db');

class Dog extends Model {};

Dog.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
},{
    sequelize: db,
    timestamps: false,
});

module.exports = Dog;
