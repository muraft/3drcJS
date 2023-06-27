const drawMap=function(x,y,scale,canvas){
  const ctx=canvas.getContext('2d');
  
  this.map.data.forEach((v,i)=>{
    xPos=(x+i%this.map.width)*scale; 
    yPos=Math.floor(y+i/this.map.width)*scale;
    
    ctx.fillStyle=v==0?'grey':'blue';
    ctx.fillRect(xPos,yPos,scale,scale)
  })
  
  this.rays.forEach(ray=>{
    ctx.strokeWidth=10; 
    ctx.strokeStyle="yellow"; 
    ctx.beginPath(); 
    ctx.moveTo(this.player.x*scale,this.player.y*scale); 
    
    let rayScale=scale/this.map.blockWidth;
    ctx.lineTo(ray.distanceX*rayScale,ray.distanceY*rayScale); 
    ctx.stroke(); 
    ctx.closePath();
  })
  
  ctx.fillStyle='red';
  ctx.beginPath();
  ctx.arc(this.player.x*scale,this.player.y*scale,2,0,2*Math.PI);
  ctx.fill(); 
  ctx.closePath();
}

module.exports=drawMap;