const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

router.get('/', (req, res) => {
	res.render('home/index');
});

router.get('/contact', (req, res) => {
	res.render('home/contact');
});

router.get('/about', (req, res) => {
	res.render('home/about');
});

module.exports = router;