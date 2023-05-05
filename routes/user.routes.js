const express = require('express');
const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect('/user/no-permission');
}

router.get('/logged', isAuthenticated, (req, res) => {
  res.render('logged', { userName: req.user.displayName, imgSrc: req.user.photos[0].value });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isAuthenticated, (req, res) => {
  res.render('profile')
})

router.get('/profile/settings', isAuthenticated, (req, res) => {
  res.render('profileSettings')
})



module.exports = router;