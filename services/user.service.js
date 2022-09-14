// internal import
const User = require("../schemas/User");
const deleteAvatar = require("../utils/deleteAvatar.util");

exports.getAllUsers = async () => {
  const users = await User.find({});
  return users;
};

exports.postAnUser = async (data) => {
  const user = new User(data).save();
  return user;
};

exports.updateAnUser = async (id, data) => {
  await deleteAvatar(id);
  const user = await User.findByIdAndUpdate(id, data);
  return user;
};

exports.deleteAnUser = async (id) => {
  await deleteAvatar(id);
  const userID = await User.findByIdAndDelete(id);
  return userID;
};
