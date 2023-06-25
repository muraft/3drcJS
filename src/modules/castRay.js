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

function getTexturePos(rayEnd, step, cellSize){
  return (Math.abs(rayEnd)+Math.abs(step))/cellSize-Math.floor((Math.abs(rayEnd)+Math.abs(step))/cellSize)
}

function getBlockId(totalX,totalY,map){
  return map.data[
            toIndex(map.side,Math.floor(totalX/map.cellSize),
            Math.floor(totalY/map.cellSize))] 
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
             texturePos: getTexturePos(rayEndY, stepY,that.map.cellSize),  
             blockId 
           }); 
         } 
         blockId=that.map.data[toIndex(that.map.side,Math.floor(rayEndX/that.map.cellSize),Math.floor((totalY)/that.map.cellSize))]; 
         if(blockId!=0){ 
           hit=true; 
           rays.push({ 
             distanceX: totalX, 
             distanceY: totalY, 
             face: identifyFace(that.player,totalX,totalY,'horizontal'), 
             texturePos: getTexturePos(rayEndX, stepX,that.map.cellSize),  
             blockId 
           }); 
         } 
         rayEndX+=stepX; 
         rayEndY+=stepY; 
         if(rayEndX<0 || rayEndX>that.map.side*that.map.cellSize)hit=true; 
         if(rayEndY<0 || rayEndY>that.map.side*that.map.cellSize)hit=true; 
       } 
       currentAngle+=angleIncrement; 
       count++; 
     } 
     return rays; 
  } 
 
 module.exports=castRay;