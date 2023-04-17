const express =  require('express');
const { getAllLocation, createLocation, updateLocation, deleteLocation } = require('../controllers/locationController');
const router = express.Router();

router.route('/locations').get(getAllLocation);
router.route('/location/new').post(createLocation);
router.route('/location/update/:id').put(updateLocation);
router.route('/location/delete/:id').delete(deleteLocation);

module.exports = router