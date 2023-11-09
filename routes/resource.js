var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/jackets');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/jackets', costume_controller.costume_create_post);

// DELETE request to delete Costume.
router.delete('/jackets/:id', costume_controller.costume_delete);

// PUT request to update Costume.
router.put('/jackets/:id', costume_controller.costume_update_put);

// GET request for one Costume.
router.get('/jackets/:id', costume_controller.costume_detail);

// GET request for list of all Costume items.
router.get('/jackets', costume_controller.costume_list);

module.exports = router;

// API for our resources
exports.api = function (req, res) {
    res.write('[');
    res.write('{"resource":"jackets", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
};
