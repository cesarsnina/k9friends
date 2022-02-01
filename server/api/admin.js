const router = require('express').Router();
const { User, Dog, Favorite } = require('../model');

// Get all users that signed up
router.get('/', async (req,res) => {
    const users = await User.findAll();
    res.json(users);
});

// Get one user by id that signed up
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json(user);
});

module.exports = router;
