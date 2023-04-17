const Notification = require("../models/notificationModal");
const Location = require('../models/locationModal');

exports.createNotification = async (request, response, next) => {
  
  try {
    await Location.findById(request.body.location_id);
    const newNotification = await Notification.create(request.body);
    response.status(201).json({
      success: true,
      newNotification,
    });
  } catch (error) {
    console.log("create new notifiaction api faild", error);
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getNotifications = async (request, response) => {
  try {
    const notifiactions = await Notification.find();
    response.status(200).json({
      success: true,
      notifiactions,
    });
  } catch (error) {
    console.log("get all notifications api faild", error);
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteNotification = async (request, response, next) => {
  try {
    const notification = await Notification.findById(request.params.id);
    if (!notification) {
      return next(
        `notification not found by this id: ${request.params.id}`,
        404
      );
    }

    await Notification.findByIdAndDelete(request.params.id);

    response.status(200).json({
      success: true,
      message: "notification delete successfully",
    });
  } catch (error) {
    console.log("delete notification api faild", error);
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateNotification = async (request, response, next) => {
  try {
    let notification = await Notification.findById(request.params.id);

    if (!notification) {
      return next(
        `notification not found by this id: ${request.params.id}`,
        404
      );
    }

      request.body.updatedAt = Date.now()
      notification = await Notification.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        runValidators: true,
        new: true,
        useFindAndModify: false,
      }
    );

    response.status(200).json({
      success: true,
      notification,
    });
  } catch (error) {
    console.log("notification update id faild", error);
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
