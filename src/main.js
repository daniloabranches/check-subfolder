const fs = require("fs");

const configJsonPath = "./config.json";

if (!fs.existsSync(configJsonPath)) {
  console.log("config.json does not exist");
  return;
}

const { subfolder, paths } = require(configJsonPath);

paths.forEach(function(path) {
  const fullPath = `${path}\\${subfolder}`;

  if (fs.existsSync(fullPath)) {
    console.log(`${fullPath} - Subfolder exists`);
  } else {
    console.log(`${fullPath} - Subfolder does not exist`);
  }
});
