const bcrypt = require("bcryptjs");

function encryptedPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if(err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
}

module.exports = { encryptedPassword }