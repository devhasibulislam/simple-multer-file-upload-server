// external import
const fs = require("fs");

// internal import
const User = require("../schemas/User");

async function deleteAvatar(id) {
  const userAvatar = await User.findById(id);
  fs.unlinkSync(`${__dirname}/../avatars/${userAvatar.avatar}`);
}

module.exports = deleteAvatar;
