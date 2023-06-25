const toRadian=(degree)=>degree*Math.PI/180;

module.exports={
  toRadian:degree=>degree*Math.PI/180,

  assign:(that,target,obj)=>Object.entries(obj).forEach(v=>that[target][v[0]]=v[1]),

  validate:(obj,list,name)=>{
    list.forEach(v=>{
      if(!obj.hasOwnProperty(v)){
        throw new Error(`${name.charAt(0).toUpperCase()+name.slice(1)} must has "${v}" as the properties`)
      }
    });
  },

  toIndex:(side,x,y)=>y*side+x
}
