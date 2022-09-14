// external import
const fs = require("fs");

// capitalize mechanism
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const postTheAvatar = (data) => {
  const modifiedFileName = capitalize(
    data.originalname.split(/[\s_]/gi).join("-").toLowerCase()
  );
  const newFileName = modifiedFileName.split(".").join(`-${Date.now()}.`);
  fs.renameSync(data.path, `${data.destination}/${newFileName}`);
  return newFileName;
};

module.exports = postTheAvatar;
