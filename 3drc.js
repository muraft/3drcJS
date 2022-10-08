// const tdrc={
//   map:{cellSize:5},
//   player:{},
//   graphic:{},
//   _rays:0
// };
//
//
// tdrc._assign=(target,obj)=>Object.entries(obj).forEach(v=>tdrc[target][v[0]]=v[1]);
// tdrc._validate=(obj,list,name)=>{
//   list.forEach(v=>{if(!obj.hasOwnProperty(v))throw new Error(`${name.charAt(0).toUpperCase()+name.slice(1)} must has "${v}"`)});
// }
// tdrc._toRadian=degree=>degree*Math.PI/180;
//
// tdrc.player={
//   x: 1,
//   y: 1,
//   size: 0.2*tdrc.map.cellSize,
//   angle: tdrc._toRadian(45),
//   speed: 0.05
// }
//
// tdrc.graphic={
//   totalRay: 300,
//   fov: tdrc._toRadian(45),
//   rayStep: 0.05,
//   texture: true,
//   depth: false
// }
//
// tdrc.setMap=map=>{
//   tdrc._assign('map',map);
//   tdrc._validate(tdrc.map,['data','width','height'],'map');
//   let {data,width,height}=tdrc.map;
//   if(data.length<width*height)throw new Error('Map data is shorter than map size');
// }
//
// tdrc.setGraphic=graphic=>{
//   if(graphic.hasOwnProperty('fov'))graphic.fov=tdrc._toRadian(graphic.fov);
//   tdrc._assign('graphic',graphic);
//   let {totalRay,fov,rayStep,texture,depth}=tdrc.graphic;
// }
//
// tdrc.render=canvas=>{
//   const ctx=canvas.getContext('2d');
//   ctx.clearRect(0,0,canvas.width,canvas.height);
//   tdrc._rays=tdrc._castRay();
//   tdrc._render3d(tdrc._rays);
// }

class Tdrc{
  constructor(){
    this.map={cellSize:5};
    this.player={};
    this.graphic={
      totalRay: 300,
      fov: this.#toRadian(45),
      rayStep: 0.05,
      texture: true,
      depth: false
    };
    this.rays=0;
    this.player={
        x: 1,
        y: 1,
        size: 0.2*this.map.cellSize,
        angle: this.#toRadian(45),
        speed: 0.05
    };
  }

  #assign(target,obj){
    return Object.entries(obj).forEach(v=>this[target][v[0]]=v[1])
  }
  #validate(obj,list,name){
    return list.forEach(v=>{if(!obj.hasOwnProperty(v))throw new Error(`${name.charAt(0).toUpperCase()+name.slice(1)} must has "${v}"`)});
  }
  #toRadian(degree){return degree*Math.PI/180}

  setMap(map){
    this.#assign('map',map);
    this.#validate(this.map,['data','width','height'],'map');
    let {data,width,height}=this.map;
    if(data.length<width*height)throw new Error('Map data is shorter than map size');
  }

  setGraphic(graphic){
    if(graphic.hasOwnProperty('fov'))graphic.fov=this.#toRadian(graphic.fov);
    this.#assign('graphic',graphic);
    let {totalRay,fov,rayStep,texture,depth}=this.graphic;
  }

  render(canvas){
    const ctx=canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //this.rays=this.#castRay();
    //this.#render3d(this.#rays);
  }
}
