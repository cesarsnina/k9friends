const path = require('path');
const fs = require('fs').promises;

const { db, Dog } = require('../model');

const seed = async() => {
    await db.sync({force: true});

    const dogPath = path.join(__dirname, 'Dog.json');

    const dogBuffer = await fs.readFile(dogPath);

    const { dogs } = JSON.parse(String(dogBuffer));

    const dogPromises = dogs.map(dog => Dog.create(dog));

    await Promise.all(dogPromises);
   
    console.log('Data have been successfully added to our table');
}

module.exports = seed;
