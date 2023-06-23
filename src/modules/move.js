const {toIndex}=require('../modules/utils.js');

const moveX=function(that,stepX){
      let playerSize=stepX>0?that.player.size/6:-that.player.size/6
      if(that.map.data[toIndex(that.map.side,Math.floor(that.player.x+stepX+playerSize),Math.floor(that.player.y+playerSize))]==0){
        that.player.x+=stepX
      }
}
const moveY=function(that,stepY){
      let playerSize=stepY>0?that.player.size/6:-that.player.size/6
      if(that.map.data[toIndex(that.map.side,Math.floor(that.player.x+playerSize),Math.floor(that.player.y+stepY+playerSize))]==0){
        that.player.y+=stepY
      }
}

module.exports={moveX,moveY};