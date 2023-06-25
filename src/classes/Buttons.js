class Buttons{
  constructor(){
    this.left=false;
    this.right=false;
    this.forward=false;
    this.backward=false;
    this.faceLeft=false;
    this.faceRight=false;
  }
  keyboard(config='default'){
    if(config=='default'){
      window.onkeydown=(event)=>{
      switch(event.keyCode){
        case 37:
        case 65:
        buttons.left=true;
        break;
        case 38:
        case 68:
        buttons.right=true;
        break;
        case 39:
        case 87:
        buttons.forward=true;
        break;
        case 40:
        case 83:
        buttons.backward=true;
        break;
        case 81:
        buttons.faceLeft=true;
        break;
        case 69:
        buttons.faceRight=true;
        break;
      }
      }
      window.onkeyup=(event)=>{
      switch(event.keyCode){
        case 37:
        case 65:
        buttons.left=false;
        break;
        case 38:
        case 68:
        buttons.right=false;
        break;
        case 39:
        case 87:
        buttons.forward=false;
        break;
        case 40:
        case 83:
        buttons.backward=false;
        break;
        case 81:
        buttons.faceLeft=false;
        break;
        case 69:
        buttons.faceRight=false;
        break;
      }
      }
    }
  }
}

module.exports=Buttons;