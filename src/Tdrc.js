const {loadDefault,loadMethods}=require('./loader.js');
const loadBlock=require('./modules/loadBlock.js');

class Tdrc{
  constructor(){
    loadDefault(this);
    loadMethods(this);
  }
  init(){
    loadBlock();
  }
}
if(!typeof window)window.Tdrc=Tdrc;
