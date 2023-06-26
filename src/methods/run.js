let that;
let func;
let start;

function loop(){
  start=performance.now();
  func();
  that._deltaTime=performance.now()-start;
  that.fps=1000/that._deltaTime;
  requestAnimationFrame(loop);
}

const run=function(f){
  that=this;
  func=f;
  window.onload=()=>requestAnimationFrame(loop);
}

module.exports=run;