const fs = require("fs");

// async
export const fileExists = (file: string) => {
  return new Promise((resolve, reject) => {
    fs.access(file, fs.constants.F_OK, (err: any) => {
      err ? reject(false) : resolve(true);
    });
  });
};

// sync
export const fileExistsSync = (file: string) => {
  try {
    fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch (err) {
    return false;
  }
};
