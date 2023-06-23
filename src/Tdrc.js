const {loadDefault,loadMethods}=require('./loader.js');
const loadBlock=require('./modules/loadBlock.js');

class Tdrc{
  constructor(){
    loadDefault(this);
    loadMethods(this);
  }
  init(){
    loadBlock(this);
  }
}

module.exports=Tdrc;
