const SHA256 = require('./utils/algorithms.js').SHA256

class Block {
  constructor(timestamp = "", data = []) {
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.generateHash();
    this.prevHash = "";
    this.nonce = 0;
  }
  generateHash() {
    return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce);
  }
  mine(difficulty) {
    while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
      this.nonce++;
      this.hash = this.generateHash();
    }
  }
}

module.exports = Block;