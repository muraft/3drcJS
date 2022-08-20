const tdrc={};

tdrc.setMap=(data,width,height)=>{
  if(data.length<width*height)throw new Error('Map data is shorter than map size');
  tdrc.map={data,width,height};
}
