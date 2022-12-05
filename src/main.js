const Block = require("./Block.js");
const Blockchain = require("./Blockchain.js");
const prompt = require('prompt-sync')();

const MyChain = new Blockchain();

MyChain.addBlock(new Block(Date.now().toString(), { from: "John", to: "Bob", amount: 100 }));
MyChain.addBlock(new Block(Date.now().toString(), { from: "Ann", to: "John", amount: 500 }));
MyChain.addBlock(new Block(Date.now().toString(), { from: "John", to: "Bob", amount: 100 }));

console.log(MyChain.chain);

let wantToMakeTransaktion = prompt('Do you want to make transaktion(y): ').toLowerCase();
while(wantToMakeTransaktion === 'y') {
  const yourName = prompt('What is your name?:');
  const recipientName = prompt('What is recipient name?:');
  const amount = parseFloat(prompt('Amount?:'));
  if(isNaN(amount)) {
    console.log('Bad amount');
  } else {
    MyChain.addBlock(new Block(Date.now().toString(), { from: yourName, to: recipientName, amount}));
  }
  wantToMakeTransaktion = prompt('Do you want to make one more transaktion?(y):');
}
console.log(MyChain.chain);