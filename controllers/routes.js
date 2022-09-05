const router = require('express').Router();
const withAuth = require('../utils/auth');

// GET home
router.get('/', async (req, res) => {
    try {
        // const userData = await User.findAll({
        //     include: [{model: Workout, attributes: ['name']}]
        // })
        // const users = userData.map((users) => users.get({ plain: true }));

        res.render('homepage', {
            // users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.render(500).json(err)
    }
});

// GET '/login'
router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.render(500).json(err)
    }
});

// GET '/logout'
router.get('/logout', async (req, res) => {
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        };
        res.redirect('/');
    } catch (err) {
        res.render(500).json(err)
    };
});

// GET '/signup'
router.get('/signup', async (req, res) => {
    try {
        res.render('signup')
    } catch (err) {
        res.render(500).json(err)
    }
});

// GET '/dashboard'
router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard')
    } catch (err) {
        res.render(500).json(err)
    }
});



module.exports = router;