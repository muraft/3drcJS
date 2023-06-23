const render3d=function(that,rays,canvas,ctx){
    let lineWidth=(canvas.width/that.graphic.totalRay);
    ctx.fillStyle="skyblue";
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle="gray";
    ctx.fillRect(0,canvas.height/2,canvas.width,canvas.height/2)
    rays.forEach((ray,i)=>{
      let distance = Math.sqrt(Math.pow(ray.distanceX-that.player.xPos,2)+Math.pow(ray.distanceY-that.player.yPos,2))/10;
      if(distance==0)distance=0.1;
      let decimal = distance*10/that.map.distance;
      let lineX=lineWidth*i, lineY=canvas.height/2-canvas.height/distance/2, lineHeight=canvas.height/distance;
      
      let textureData=that.texture.data[ray.blockId][ray.face];
      if(that.graphic.texture){
        if(textureData.type=='image'){
          if(ray.face=='right')ray.texturePos=1-ray.texturePos;
          if(ray.face=='top')ray.texturePos=1-ray.texturePos; 
          let start=ray.texturePos*textureData.content.width;
          ctx.drawImage(textureData.content,start,0,lineWidth/textureData.content.width,textureData.content.height,lineX,lineY,lineWidth,lineHeight)
        }else{
          ctx.fillStyle=textureData.content;
          ctx.fillRect(lineX,lineY,lineWidth,lineHeight)
        }
        if(that.graphic.depth){
          decimal*=50;
          ctx.fillStyle=ray.face=="right"||ray.face=="left"?"rgba(65,65,65,"+decimal+"%)":"rgba(0,0,0,"+decimal+"%)"
          ctx.fillRect(lineX,lineY,lineWidth,lineHeight)
        }
      }
      else{
        decimal=50-decimal*25;
        ctx.fillStyle=that.graphic.depth?
        (ray.face=="right"||ray.face=="left"?"hsl(240, 100%, "+decimal+"%)":"hsl(240, 70%, "+decimal+"%)"):
        (ray.face=="right"||ray.face=="left"?"hsl(240, 100%, 50%)":"hsl(240, 70%, 50%)");
        ctx.fillRect(lineX,lineY,lineWidth,lineHeight);
      }
    }) 
  } 
  
module.exports=render3d;