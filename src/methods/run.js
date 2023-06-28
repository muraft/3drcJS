let that;
let func;
let start;
let isLoop;

function loop(){
  start=performance.now();
  func();
  that._deltaTime=performance.now()-start;
  that.fps=1000/that._deltaTime;
  if(isLoop)requestAnimationFrame(loop);
}

const run=function(f,config={loop:true, onload:false}){
  that=this;
  func=f;
  isLoop=config.loop;
  
  if(config.onload)window.onload=()=>requestAnimationFrame(loop);
  else{requestAnimationFrame(loop)}
}

module.exports=run;