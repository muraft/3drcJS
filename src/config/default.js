const {toRadian}=require('../modules/utils.js');

const mapCellSize=5;
module.exports={
    map:{
      cellSize:mapCellSize
    },
    texture:{
      colour:'blue',
      data: {}
    },
    player:{
      //x: 1,
      //y: 1, 
      size: 0.2*mapCellSize,
      angle: toRadian(45),
      speed: 0.05 //Block per frame
    },
    graphic:{
      totalRay: 300,
      fov: toRadian(45),
      rayStep: 0.05,
      texture: true,
      depth: true
    },
    rays:[], 
    _deltaTime:0,
    fps:0,
    devMode:false
}
