const express = require('express')
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.route('/').post(roleMiddleware(['teacher', 'admin']), courseController.createCourse);
router.route('/').get(courseController.getAllCourses); // http://localhost:3000/courses
router.route('/:slug').get(courseController.getCourse); // http://localhost:3000/courses/_id

module.exports = router;