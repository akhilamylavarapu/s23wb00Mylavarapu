// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('jackets', { title: 'Search Results jackets' });
// });

// module.exports = router;

var express = require('express');
const costume_controlers = require('../controllers/costumes');
var router = express.Router();

/* GET costumes view */
router.get('/', costume_controlers.costume_view_all_Page);

module.exports = router;

