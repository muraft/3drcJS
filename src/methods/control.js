const {toRadian, toIndex}=require('../modules/utils.js')

const moveX=stepX=>{
      let playerSize=stepX>0?this.player.size/6:-this.player.size/6
      if(this.map.data[toIndex(Math.floor(this.player.x+stepX+playerSize),Math.floor(this.player.y+playerSize))]==0){
        this.player.x+=stepX
      }
}
const moveY=stepY=>{
      let playerSize=stepY>0?this.player.size/6:-this.player.size/6
      if(this.map.data[toIndex(Math.floor(this.player.x+playerSize),Math.floor(this.player.y+stepY+playerSize))]==0){
        this.player.y+=stepY
      }
    }

const control=buttons=>{
    if(buttons.left){
        let degree = this.player.angle-toRadian(90);
        let stepX=this.player.speed*Math.cos(degree);
        let stepY=this.player.speed*Math.sin(degree);
        this.moveX(stepX);
        this.moveY(stepY);
      }
    if(buttons.forward){
      let stepX=this.player.speed*Math.cos(this.player.angle);
      let stepY=this.player.speed*Math.sin(this.player.angle);
      this.moveX(stepX);
      this.moveY(stepY);
    }
    if(buttons.right){
      let degree = this.player.angle+toRadian(90);
      let stepX=this.player.speed*Math.cos(degree);
      let stepY=this.player.speed*Math.sin(degree);
      this.moveX(stepX);
      this.moveY(stepY);
    }
    if(buttons.backward){
      let stepX=this.player.speed*Math.cos(this.player.angle);
      let stepY=this.player.speed*Math.sin(this.player.angle);
      this.moveX(-stepX);
      this.moveY(-stepY);
    }
    if(buttons.faceLeft)this.player.angle-=toRadian(1);
    if(buttons.faceRight)this.player.angle+=toRadian(1);
  }
  
module.exports={moveX, moveY, control} 