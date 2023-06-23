const castRay=require('../modules/castRay.js')
const render3d=require('../modules/render3d.js')

const render=(that,canvas)=>{
    const ctx=canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    that.player.xPos = that.player.x*that.map.cellSize;
    that.player.yPos = that.player.y*that.map.cellSize;
    that.rays=castRay();
    //console.log(that.rays);
    render3d(that.rays,canvas,ctx);
  }
  
module.exports=render;