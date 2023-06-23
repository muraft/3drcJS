const {identifyFace, toIndex}=require('./utils.js')

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
      let hit=false;
      while(!hit){
        let blockId=that.map.data[toIndex(that.map.side,Math.floor((rayEndX+stepX)/that.map.cellSize),Math.floor(rayEndY/that.map.cellSize))];
        if(blockId!=0){
          hit=true;
          rays.push({
            distanceX: rayEndX+stepX,
            distanceY: rayEndY+stepY,
            face: identifyFace(that.player,rayEndX+stepX,rayEndY+stepY,'vertical'),
            texturePos: (
              (Math.abs(rayEndY)+Math.abs(stepY))/that.map.cellSize
              -Math.floor((Math.abs(rayEndY)+Math.abs(stepY))/that.map.cellSize)
            ), 
            blockId
          });
        }
        blockId=that.map.data[toIndex(that.map.side,Math.floor(rayEndX/that.map.cellSize),Math.floor((rayEndY+stepY)/that.map.cellSize))];
        if(blockId!=0){
          hit=true;
          rays.push({
            distanceX: rayEndX+stepX,
            distanceY: rayEndY+stepY,
            face: identifyFace(that.player,rayEndX+stepX,rayEndY+stepY,'horizontal'),
            texturePos: (
              (Math.abs(rayEndX)+Math.abs(stepX))/that.map.cellSize
              -Math.floor((Math.abs(rayEndX)+Math.abs(stepX))/that.map.cellSize)
            ), 
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