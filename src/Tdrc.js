const {loadDefault,loadMethods,loadClasses}=require('./loader.js');
const loadBlock=require('./modules/loadBlock.js');

class Tdrc{
  constructor(){
    loadDefault(this);
    loadMethods(this, ['set','control','render']);
  }
  init(){
    loadBlock(this);
  }
}

if(typeof window!='undefined')loadClasses(['Buttons']);
else console.warn('\x1b[33m%s\x1b[0m' ,"Application runned outside the browser, window is not found, the global class won't load");

module.exports=Tdrc;
