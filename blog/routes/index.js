var express = require('express');
var router = express.Router();

const blogController = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog' });
});

router.get('/author', blogController.showAutor)

module.exports = router;
