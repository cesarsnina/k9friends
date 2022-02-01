const User = require('./User');
const Dog = require('./Dog');
const Favorite = require('./Favorite');
const { db } = require('../db');


User.belongsToMany(Dog, { through: Favorite })
Dog.belongsToMany(User, { through: Favorite })


module.exports = {
    User,
    Dog,
    Favorite,
    db
};
