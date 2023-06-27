const drawMap=function(x,y,width,canvas){
  const ctx=canvas.getContext('2d');
  this.map.data.forEach((v,i)=>{
    xPos=(x+i%this.map.width)*width; 
    yPos=Math.floor(y+i/this.map.width)*width;
    
    ctx.fillStyle=v==0?'grey':'blue';
    ctx.fillRect(xPos,yPos,width,width)
  })
  ctx.fillStyle='red';
  ctx.arc(this.player.x*width,this.player.y*width,2,0,2*Math.PI);
  ctx.fill(); 
}

module.exports=drawMap;