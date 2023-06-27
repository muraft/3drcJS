const castRay=require('../modules/castRay.js')
const render3d=require('../modules/render3d.js')

const render=function(canvas){
    const ctx=canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);

    this.player.xPos = this.player.x*this.map.blockWidth;
    this.player.yPos = this.player.y*this.map.blockWidth;
    this.rays=castRay(this);
    if(this.devMode)console.log(this.rays);
    render3d(this,this.rays,canvas,ctx);
  }
  
module.exports=render;