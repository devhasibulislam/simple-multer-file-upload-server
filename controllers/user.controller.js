// internal import
const userService = require("../services/user.service");

// display all user from DB
exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers();

    res.status(200).json({
      success: true,
      message: "OK",
      description: "Fetching all user from DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// post an user to DB
exports.postAnUser = async (req, res, next) => {
  try {
    const result = await userService.postAnUser(req.body);

    res.status(201).json({
      success: true,
      message: "Created",
      description: "Inserting a new user to DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update an user from DB
exports.updateAnUser = async (req, res, next) => {
  try {
    const user = await userService.updateAnUser(req.params.id, req.body);

    res.status(202).json({
      success: true,
      message: "Accepted",
      description: "Specific user updated from DB",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// delete an user from DB
exports.deleteAnUser = async (req, res, next) => {
  try {
    const user = await userService.deleteAnUser(req.params.id);
    console.log(user.data.avatar);

    res.status(202).json({
      success: true,
      message: "Accepted",
      description: "Delete an existing user from DB",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
