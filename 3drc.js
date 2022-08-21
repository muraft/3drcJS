const tdrc={map:{}};

tdrc._assign=(target,obj)=>{
  Object.entries(obj).forEach(v=>tdrc[target][v[0]]=v[1]);
}

tdrc.setMap=map=>{
  tdrc._assign('map',map);
  let {data,width,height}=tdrc.map;
  if(data.length<width*height)throw new Error('Map data is shorter than map size');
}
