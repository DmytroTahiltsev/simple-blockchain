const crypto = require("crypto");

SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");

module.exports = { SHA256 }