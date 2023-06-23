const {toRadian}=require('../modules/utils.js');
const {moveX, moveY}=require('../modules/move.js');

const control=function(buttons){
    if(buttons.left){
        let degree = this.player.angle-toRadian(90);
        let stepX=this.player.speed*Math.cos(degree);
        let stepY=this.player.speed*Math.sin(degree);
        moveX(this,stepX);
        moveY(this,stepY);
      }
    if(buttons.forward){
      let stepX=this.player.speed*Math.cos(this.player.angle);
      let stepY=this.player.speed*Math.sin(this.player.angle);
      moveX(this,stepX);
      moveY(this,stepY);
    }
    if(buttons.right){
      let degree = this.player.angle+toRadian(90);
      let stepX=this.player.speed*Math.cos(degree);
      let stepY=this.player.speed*Math.sin(degree);
      moveX(this,stepX);
      moveY(this,stepY);
    }
    if(buttons.backward){
      let stepX=this.player.speed*Math.cos(this.player.angle);
      let stepY=this.player.speed*Math.sin(this.player.angle);
      moveX(this,-stepX);
      moveY(this,-stepY);
    }
    if(buttons.faceLeft)this.player.angle-=toRadian(1);
    if(buttons.faceRight)this.player.angle+=toRadian(1);
  }
  
module.exports=control;