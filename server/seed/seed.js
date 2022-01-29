const path = require('path');
const fs = require('fs').promises;

const { db, User } = require('../model');

const seed = async() => {
    await db.sync({force: true});

    const userPath = path.join(__dirname, 'user.json');

    const userBuffer = await fs.readFile(userPath);

    const { users } = JSON.parse(String(userBuffer));

    const userPromises = users.map(user => User.create(user));

    await Promise.all(userPromises);
   
    console.log('Data have been successfully added to our table');
}

seed();

module.exports = seed;
