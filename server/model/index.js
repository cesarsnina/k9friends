const Dog = require('./Dog');
const User = require('./User');
const { db } = require('../db');

/*
Add relationship here.
User may have many dogs as favorite
stretch goal
*/



module.exports = {
    Dog,
    User,
    db
}