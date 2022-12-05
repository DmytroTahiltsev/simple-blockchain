const Block = require("./Block.js");
const Blockchain = require("./Blockchain.js");

const MyChain = new Blockchain();

MyChain.addBlock(new Block(Date.now().toString(), { from: "John", to: "Bob", amount: 100 }));
MyChain.addBlock(new Block(Date.now().toString(), { from: "Ann", to: "John", amount: 500 }));
MyChain.addBlock(new Block(Date.now().toString(), { from: "John", to: "Bob", amount: 100 }));

console.log(MyChain.chain);