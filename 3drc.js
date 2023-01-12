class Tdrc{
  constructor(){
    this.map={cellSize:5};
    this.player={
      x: 1,
      y: 1,
      size: 0.2*this.map.cellSize,
      angle: this.#toRadian(45),
      speed: 0.05
    };
    this.graphic={
      totalRay: 300,
      fov: this.#toRadian(45),
      rayStep: 0.05,
      texture: true,
      depth: false
    };
    this.rays=0;
  }

  #assign(target,obj){
    return Object.entries(obj).forEach(v=>this[target][v[0]]=v[1])
  }
  #validate(obj,list,name){
    return list.forEach(v=>{if(!obj.hasOwnProperty(v))throw new Error(`${name.charAt(0).toUpperCase()+name.slice(1)} must has "${v}"`)});
  }
  #toRadian(degree){return degree*Math.PI/180}
  #toIndex(x,y){return y*this.map.side+x}

  setMap(map){
    this.#assign('map',map);
    this.#validate(this.map,['data'],'map');
    let side=Math.sqrt(this.map.data.length);
    if(side%1!=0)throw new Error('Only a×a square map is supported');
    else this.map.side=side;
    this.map.distance=this.map.side*this.map.cellSize-this.map.cellSize*2;
  }

  setGraphic(graphic){
    if(graphic.hasOwnProperty('fov'))graphic.fov=this.#toRadian(graphic.fov);
    this.#assign('graphic',graphic);
    let {totalRay,fov,rayStep,texture,depth}=this.graphic;
  }

  #castRay(){
    let currentAngle=this.player.angle-this.graphic.fov/2;
    let angleIncrement=this.graphic.fov/this.graphic.totalRay;
    let rays=[];
    let count=0;

    while(count<this.graphic.totalRay)
    {
      let rayEndX=this.player.xPos;
      let rayEndY=this.player.yPos;
      let stepX=this.graphic.rayStep*Math.cos(currentAngle);
      let stepY=this.graphic.rayStep*Math.sin(currentAngle);
      let hit=false;
      while(!hit){
        if(this.map.data[this.#toIndex(Math.floor((rayEndX+stepX)/this.map.cellSize),Math.floor(rayEndY/this.map.cellSize))]==1){
          hit=true;
          rays.push([rayEndX+stepX,rayEndY+stepY,"right",
          (
            (Math.abs(rayEndY)+Math.abs(stepY))/this.map.cellSize
          -Math.floor((Math.abs(rayEndY)+Math.abs(stepY))/this.map.cellSize)
          )]);

        }
        if(this.map.data[this.#toIndex(Math.floor(rayEndX/this.map.cellSize),Math.floor((rayEndY+stepY)/this.map.cellSize))]==1){
          hit=true;
          rays.push([rayEndX+stepX,rayEndY+stepY,"left",
          (
            (Math.abs(rayEndX)+Math.abs(stepX))/this.map.cellSize
          -Math.floor((Math.abs(rayEndX)+Math.abs(stepX))/this.map.cellSize)
          )]);
        }
        rayEndX+=stepX;
        rayEndY+=stepY;
        if(rayEndX<0 || rayEndX>this.map.side*this.map.cellSize)hit=true;
        if(rayEndY<0 || rayEndY>this.map.side*this.map.cellSize)hit=true;
      }
      currentAngle+=angleIncrement;
      count++
    }
    return rays;
  }
 
  #render3d(rays,canvas,ctx){
    let lineWidth=(canvas.width/this.graphic.totalRay);
    ctx.fillStyle="skyblue";
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle="gray";
    ctx.fillRect(0,canvas.height/2,canvas.width,canvas.height/2)
    rays.forEach((ray,i)=>{
      let distance = Math.sqrt(Math.pow(ray[0]-this.player.xPos,2)+Math.pow(ray[1]-this.player.yPos,2))/10;
      if(distance==0)distance=0.1;
      let decimal = distance*10/this.map.distance;
      let lineX=lineWidth*i, lineY=canvas.height/2-canvas.height/distance/2, lineHeight=canvas.height/distance;

      if(this.graphic.texture && false){
        let start=ray[3]*brick.width;
        ctx.drawImage(brick,start,0,lineWidth/brick.width,brick.height,lineX,lineY,lineWidth,lineHeight)
        if(this.graphic.depth){
          decimal*=50;
          ctx.fillStyle=ray[2]=="right"?"rgba(65,65,65,"+decimal+"%)":"rgba(0,0,0,"+decimal+"%)"
          ctx.fillRect(lineX,lineY,lineWidth,lineHeight)
        }
      }
      else{
        decimal=50-decimal*25;
        ctx.fillStyle=this.graphic.depth?
        (ray[2]=="right"?"hsl(240, 100%, "+decimal+"%)":"hsl(240, 70%, "+decimal+"%)"):
        (ray[2]=="right"?"hsl(240, 100%, 50%)":"hsl(240, 70%, 50%)");
        ctx.fillRect(lineX,lineY,lineWidth,lineHeight);
      }
    }) 
  } 

  render(canvas){
    const ctx=canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    this.player.xPos = this.player.x*this.map.cellSize;
    this.player.yPos = this.player.y*this.map.cellSize;
    this.rays=this.#castRay();
    console.log(this.rays);
    this.#render3d(this.rays,canvas,ctx);
  }
}
