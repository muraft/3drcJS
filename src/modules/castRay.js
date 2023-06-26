const {toIndex}=require('./utils.js')

function identifyFace(player,posX,posY,orientation){
    if(orientation=='vertical'){
      if(posX>player.xPos)return 'left';
      else return 'right';
    }
    if(orientation=='horizontal'){
      if(posY>player.yPos)return 'top';
      else return 'bottom';
    }
  }

function getTexturePos(rayEnd, step, blockWidth){
  return (Math.abs(rayEnd)+Math.abs(step))/blockWidth-Math.floor((Math.abs(rayEnd)+Math.abs(step))/blockWidth)
}

function getBlockId(totalX,totalY,map){
  return map.data[
            toIndex(map.width,Math.floor(totalX/map.blockWidth),
            Math.floor(totalY/map.blockWidth))] 
}

const castRay=(that)=>{ 
     let currentAngle=that.player.angle-that.graphic.fov/2; 
     let angleIncrement=that.graphic.fov/that.graphic.totalRay; 
     let rays=[]; 
     let count=0; 
  
     while(count<that.graphic.totalRay) 
     { 
       let rayEndX=that.player.xPos; 
       let rayEndY=that.player.yPos; 
       let stepX=that.graphic.rayStep*Math.cos(currentAngle); 
       let stepY=that.graphic.rayStep*Math.sin(currentAngle);
       let totalX,totalY;
       
       let hit=false; 
       while(!hit){ 
         totalX=rayEndX+stepX;
         totalY=rayEndY+stepY;

         let blockId=getBlockId(totalX, rayEndY, that.map)
         if(blockId!=0){ 
           hit=true; 
           rays.push({ 
             distanceX: totalX, 
             distanceY: totalY, 
             face: identifyFace(that.player,totalX,totalY,'vertical'), 
             texturePos: getTexturePos(rayEndY, stepY,that.map.blockWidth),  
             blockId 
           }); 
         } 
         blockId=that.map.data[toIndex(that.map.width,Math.floor(rayEndX/that.map.blockWidth),Math.floor((totalY)/that.map.blockWidth))]; 
         if(blockId!=0){ 
           hit=true; 
           rays.push({ 
             distanceX: totalX, 
             distanceY: totalY, 
             face: identifyFace(that.player,totalX,totalY,'horizontal'), 
             texturePos: getTexturePos(rayEndX, stepX,that.map.blockWidth),  
             blockId 
           }); 
         } 
         rayEndX+=stepX; 
         rayEndY+=stepY; 
         if(rayEndX<0 || rayEndX>that.map.width*that.map.blockWidth)hit=true; 
         if(rayEndY<0 || rayEndY>that.map.width*that.map.blockWidth)hit=true; 
       } 
       currentAngle+=angleIncrement; 
       count++; 
     } 
     return rays; 
  } 
 
 module.exports=castRay;