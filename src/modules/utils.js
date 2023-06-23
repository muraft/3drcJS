const toRadian=(degree)=>degree*Math.PI/180;

module.exports={
  toRadian:degree=>degree*Math.PI/180,

  assign:(target,obj)=>Object.entries(obj).forEach(v=>this[target][v[0]]=v[1]),

  validate:(obj,list,name)=>{
    list.forEach(v=>{
      if(!obj.hasOwnProperty(v)){
        throw new Error(`${name.charAt(0).toUpperCase()+name.slice(1)} must has "${v}"`)
      }
    });
  },

  toIndex:(x,y)=>y*this.map.side+x, 
  
  identifyFace:(player,posX,posY,orientation)=>{
    if(orientation=='vertical'){
      if(posX>player.xPos)return 'left';
      else return 'right';
    }
    if(orientation=='horizontal'){
      if(posY>player.yPos)return 'top';
      else return 'bottom';
    }
  } 
}
