// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('jackets', { title: 'Search Results jackets' });
// });

// module.exports = router;

var express = require('express');
const costume_controlers = require('../controllers/jackets');
var router = express.Router();

/* GET costumes view */
router.get('/', costume_controlers.costume_view_all_Page);

/* GET detail costume page */
router.get('/detail', costume_controlers.costume_view_one_Page);

/* GET create costume page */
router.get('/create', costume_controlers.costume_create_Page);

/* GET create update page */
router.get('/update', costume_controlers.costume_update_Page);


module.exports = router;

