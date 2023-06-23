const {assign, validate, toRadian}=require('../modules/utils.js');

const setMap=(that,map)=>{
    assign('map',map);
    validate(that.map,['data'],'map');
    let side=Math.sqrt(that.map.data.length);
    if(side%1!=0)throw new Error('Only a×a square map is supported');
    else that.map.side=side;
    that.map.distance=that.map.side*that.map.cellSize-that.map.cellSize*2;
  }

const setGraphic=(that,graphic)=>{
    if(graphic.hasOwnProperty('fov'))graphic.fov=toRadian(graphic.fov);
    assign('graphic',graphic);
    let {totalRay,fov,rayStep,texture,depth}=that.graphic;
  }
  
module.exports={setMap,setGraphic}