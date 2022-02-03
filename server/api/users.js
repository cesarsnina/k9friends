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

// Get all dogs the user added to their favorite
router.get('/favorite', async (req, res) => {

});

// Add dog to favorite
router.post('/favorite/:dogId', async (req, res) => {

});

// Remove dog from favorite
router.delete('/favorite/:dogId', async (req, res) => {

});

// User can send their form to contact us
router.post('/contactus', async(req,res) => {
    // Only being console.log
    const { contactForm } = await req.body;
    console.log(contactForm);
    res.send(contactForm);
});

module.exports = router;
