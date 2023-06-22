const {loadDefault,loadModules}=require('./loader.js');

class Tdrc{
  constructor(){
    loadDefault(this);
    loadModules(this);
  }
}

console.log(new Tdrc())
