const express = require('express');
const courseController = require('../controllers/pageController');

const router = express.Router();

router.route('/').post(courseController.createCourse); // localhost:3000/courses


module.exports = router;