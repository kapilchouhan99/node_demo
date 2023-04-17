const express = require('express');
const {createNotification, getNotifications, deleteNotification, updateNotification} = require('../controllers/notificationController');

const router = express.Router();

router.route('/notifications').get(getNotifications);
router.route('/notification/new').post(createNotification);
router.route('/notification/delete/:id').delete(deleteNotification);
router.route('/notification/update/:id').put(updateNotification);

module.exports = router;
