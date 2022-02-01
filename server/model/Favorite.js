const { db, DataTypes, Model } = require('../db');
const { User } = require('./User');
const { Dog } = require('./Dog');

class Favorite extends Model {};

Favorite.init({
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    DogId: {
        type: DataTypes.INTEGER,
        references: {
            model: Dog,
            key: 'id'
        }
    }
},
{
    sequelize: db,
    timestamps: false,
});

module.exports = Favorite;
