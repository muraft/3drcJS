const {assign, validate, toRadian}=require('../modules/utils.js');

const setMap=function(map){
    Object.assign(this.map,map);
    validate(this.map,['data'],'map');
    let side=Math.sqrt(this.map.data.length);
    if(side%1!=0)throw new Error('Only n×n square map is supported');
    else this.map.side=side;
    this.map.distance=this.map.side*this.map.cellSize-this.map.cellSize*2;
  }

const setGraphic=function(graphic){
    if(graphic.hasOwnProperty('fov'))graphic.fov=toRadian(graphic.fov);
    Object.assign(this.graphic,graphic);
    let {totalRay,fov,rayStep,texture,depth}=this.graphic;
  }
  
const setPlayer=function(player){
  if(player.hasOwnProperty('angle'))player.angle=toRadian(player.angle);
  Object.assign(this.player, player);
  validate(this.player,['x','y'],'player');
}
  
module.exports={setMap,setGraphic,setPlayer}