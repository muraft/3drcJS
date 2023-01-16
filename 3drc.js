class Tdrc{
  constructor(){
    this.map={cellSize:5};
    this.texture={
      colour:'blue', 
      data: {}
    }
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
  
  #loadTexture(){
    Object.entries(this.map.texture).forEach(v=>{
      let data,type;
      if(/\.(jpg||jpeg||png)$/g.test(v[1])){
        type='image';
        data=new Image();
        data.src=v[1];
      }
      else{
        type='colour';
        data=v[1];
      }
      this.texture.data[v[0]]={type,content:data}
    })
  }

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
        let blockId=this.map.data[this.#toIndex(Math.floor((rayEndX+stepX)/this.map.cellSize),Math.floor(rayEndY/this.map.cellSize))];
        if(blockId!=0){
          hit=true;
          rays.push({
            distanceX: rayEndX+stepX,
            distanceY: rayEndY+stepY,
            orientation: "right",
            texturePos: (
              (Math.abs(rayEndY)+Math.abs(stepY))/this.map.cellSize
              -Math.floor((Math.abs(rayEndY)+Math.abs(stepY))/this.map.cellSize)
            ), 
            blockId
          });
        }
        blockId=this.map.data[this.#toIndex(Math.floor(rayEndX/this.map.cellSize),Math.floor((rayEndY+stepY)/this.map.cellSize))];
        if(blockId!=0){
          hit=true;
          rays.push({
            distanceX: rayEndX+stepX,
            distanceY: rayEndY+stepY,
            orientation: "left",
            texturePos: (
              (Math.abs(rayEndX)+Math.abs(stepX))/this.map.cellSize
              -Math.floor((Math.abs(rayEndX)+Math.abs(stepX))/this.map.cellSize)
            ), 
            blockId
          });
        }
        rayEndX+=stepX;
        rayEndY+=stepY;
        if(rayEndX<0 || rayEndX>this.map.side*this.map.cellSize)hit=true;
        if(rayEndY<0 || rayEndY>this.map.side*this.map.cellSize)hit=true;
      }
      currentAngle+=angleIncrement;
      count++;
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
      let distance = Math.sqrt(Math.pow(ray.distanceX-this.player.xPos,2)+Math.pow(ray.distanceY-this.player.yPos,2))/10;
      if(distance==0)distance=0.1;
      let decimal = distance*10/this.map.distance;
      let lineX=lineWidth*i, lineY=canvas.height/2-canvas.height/distance/2, lineHeight=canvas.height/distance;
      
      let textureData=this.texture.data[ray.blockId];
      if(this.graphic.texture){
        if(textureData.type=='image'){
          if(ray.orientation=='left')ray.texturePos=1-ray.texturePos;
          let start=ray.texturePos*textureData.content.width;
          ctx.drawImage(textureData.content,start,0,lineWidth/textureData.content.width,textureData.content.height,lineX,lineY,lineWidth,lineHeight)
        }else{
          ctx.fillStyle=textureData.content;
          ctx.fillRect(lineX,lineY,lineWidth,lineHeight)
        }
        if(this.graphic.depth){
          decimal*=50;
          ctx.fillStyle=ray.orientation=="right"?"rgba(65,65,65,"+decimal+"%)":"rgba(0,0,0,"+decimal+"%)"
          ctx.fillRect(lineX,lineY,lineWidth,lineHeight)
        }
      }
      else{
        decimal=50-decimal*25;
        ctx.fillStyle=this.graphic.depth?
        (ray.orientation=="right"?"hsl(240, 100%, "+decimal+"%)":"hsl(240, 70%, "+decimal+"%)"):
        (ray.orientation=="right"?"hsl(240, 100%, 50%)":"hsl(240, 70%, 50%)");
        ctx.fillRect(lineX,lineY,lineWidth,lineHeight);
      }
    }) 
  } 
  
  init(){
    this.#loadTexture();
  }
  
  render(canvas){
    const ctx=canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    this.player.xPos = this.player.x*this.map.cellSize;
    this.player.yPos = this.player.y*this.map.cellSize;
    this.rays=this.#castRay();
    //console.log(this.rays);
    this.#render3d(this.rays,canvas,ctx);
  }
  
  #moveX(stepX){
      let playerSize=stepX>0?this.player.size/6:-this.player.size/6
      if(this.map.data[this.#toIndex(Math.floor(this.player.x+stepX+playerSize),Math.floor(this.player.y+playerSize))]==0){
        this.player.x+=stepX
      }
    }
   #moveY(stepY){
      let playerSize=stepY>0?this.player.size/6:-this.player.size/6
      if(this.map.data[this.#toIndex(Math.floor(this.player.x+playerSize),Math.floor(this.player.y+stepY+playerSize))]==0){
        this.player.y+=stepY
      }
    }
  
  control(buttons){
    if(buttons.left){
        let degree = this.player.angle-this.#toRadian(90);
        let stepX=this.player.speed*Math.cos(degree);
        let stepY=this.player.speed*Math.sin(degree);
        this.#moveX(stepX);
        this.#moveY(stepY);
      }
    if(buttons.forward){
      let stepX=this.player.speed*Math.cos(this.player.angle);
      let stepY=this.player.speed*Math.sin(this.player.angle);
      this.#moveX(stepX);
      this.#moveY(stepY);
    }
    if(buttons.right){
      let degree = this.player.angle+this.#toRadian(90);
      let stepX=this.player.speed*Math.cos(degree);
      let stepY=this.player.speed*Math.sin(degree);
      this.#moveX(stepX);
      this.#moveY(stepY);
    }
    if(buttons.backward){
      let stepX=this.player.speed*Math.cos(this.player.angle);
      let stepY=this.player.speed*Math.sin(this.player.angle);
      this.#moveX(-stepX);
      this.#moveY(-stepY);
    }
    if(buttons.faceLeft)this.player.angle-=this.#toRadian(1);
    if(buttons.faceRight)this.player.angle+=this.#toRadian(1);
  }
}
