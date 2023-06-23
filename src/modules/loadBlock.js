const loadBlock=that=>{ 
  Object.entries(that.map.block).forEach(v=>{
    if(!Array.isArray(v[1].texture))v[1].texture=[v[1].texture,v[1].texture,v[1].texture,v[1].texture] 
    that.texture.data[v[0]]={}; 
    v[1].texture.forEach((w,i)=>{ 
      let data,type; 
      let transparent=false; 
      if(/\.(jpg||jpeg||png)$/g.test(w)){ 
        type='image'; 
        data=new Image(); 
        data.src=w; 
        if(/\.png$/g.test(w))transparent=true; 
      } 
      else{ 
        type='colour'; 
        data=w; 
      } 
      let face=['left','top','right','bottom'] 
      that.texture.data[v[0]][face[i]]={type,content:data,transparent} 
    }) 
  }) 
}

module.exports=loadBlock;