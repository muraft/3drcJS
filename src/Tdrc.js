const {loadDefault}=require('./loader.js');

class Tdrc{
  constructor(){
    this.ok=1
    loadDefault(this);
  }
}

console.log(new Tdrc())
