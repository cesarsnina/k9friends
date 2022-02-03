const router = require('express').Router();
const { Dog } = require('../model');

// Get all users that signed up
router.get('/', async (req,res) => {
    const dogs = await Dog.findAll();
    res.json(dogs);
});

// Get one dog by id that signed up
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const dog = await Dog.findByPk(id);
    res.json(dog);
});

// Add new dog
router.post('/', async (req, res) => {
    
});

// Update dog by id
router.put('/:id', async (req, res) => {

});

// Delete dog by id
router.delete('/:id', async (req, res) => {

});

module.exports = router;
