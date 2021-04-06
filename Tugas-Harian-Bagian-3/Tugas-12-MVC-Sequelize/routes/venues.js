var express = require('express');
var router = express.Router();

//import middleware
const asyncMiddleware = require('../middlewares/asyncMiddleware');

//import Controller
const VenueController = require('../controllers/VenueController');

router.post('/', asyncMiddleware(VenueController.save));
router.get('/', asyncMiddleware(VenueController.findAll));
router.get('/:id', asyncMiddleware(VenueController.show));
router.put('/:id', asyncMiddleware(VenueController.update));
router.delete('/:id', asyncMiddleware(VenueController.destroy));


module.exports = router;