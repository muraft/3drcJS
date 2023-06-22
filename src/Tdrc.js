var path = require('path');
const {loadDefault}=require(path.resolve(__dirname,"./loader.js"));

class Tdrc{
  constructor(){
    this.ok=1
    loadDefault(this);
  }
}

console.log(new Tdrc())
