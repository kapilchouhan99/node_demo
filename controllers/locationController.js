const Location = require("../models/locationModal");

exports.createLocation = async (request, response) => {
  try {
    const location = await Location.create(request.body);
    response.status(201).json({
      success: true,
      location,
    });
  } catch (error) {
    console.log("create location api faild", error);
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllLocation = async (request, response) => {
  try {
    const location = await Location.find();
    response.status(200).json({
      success: true,
      location,
    });
  } catch (error) {
    console.log("getAll location api faild", error);
    response.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateLocation = async (request, response, next) => {
  try {
    let location = await Location.findById(request.params.id);

    if (!location) {
      return next(
        `location is not found with this ID:${request.params.id}`,
        404
      );
    }

    request.body.updatedAt = Date.now()
    location = await Location.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    response.status(200).json({
        success: true,
        location
    })
  } catch (error) {

    console.log('location update api faild', error)
    response.status(400).json({
        success: false,
        error: error.message
    })
  }
};

exports.deleteLocation = async (request, response, next) => {

    try {
        const location = await Location.findById(request.params.id);

    if (!location) {
      return next(
        `location is not found with this ID:${request.params.id}`,
        404
      );
    }

    await Location.findByIdAndDelete(request.params.id)

    response.status(200).json({
        success: true,
        message: 'location deleted successfully'
    })

    } catch (error) {
        console.log('location delete api faild', error)
        response.status(400).json({
            success: false,
            error: error.message
        })            
    }
};
