
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
}
