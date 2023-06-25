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
      speed: 0.05
    },
    graphic:{
      totalRay: 300,
      fov: toRadian(45),
      rayStep: 0.05,
      texture: true,
      depth: false
    },
    rays:[], 
    devMode:false
}
