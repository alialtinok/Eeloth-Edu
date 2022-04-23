const express = require('express');
const pageController = require('../controllers/pageController');
const redirectMiddleware = require('../middlewares/redirectMiddleware');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/register').get(redirectMiddleware, pageController.getRegisterPage);  //Giriş yapıldıktan sonra login veya anasayfaya endpoint yoluyla
router.route('/login').get(redirectMiddleware, pageController.getLoginPage); //  yönlenmeyi engellemek redirectMiddleware kullanıldı.
module.exports = router;