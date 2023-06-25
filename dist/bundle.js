!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Tdrc=t():e.Tdrc=t()}(self,(()=>(()=>{var e={692:e=>{e.exports=class{constructor(){this.left=!1,this.right=!1,this.forward=!1,this.backward=!1,this.faceLeft=!1,this.faceRight=!1}keyboard(e="default"){"default"==e&&(window.onkeydown=e=>{switch(e.keyCode){case 37:case 65:buttons.left=!0;break;case 38:case 68:buttons.right=!0;break;case 39:case 87:buttons.forward=!0;break;case 40:case 83:buttons.backward=!0;break;case 81:buttons.faceLeft=!0;break;case 69:buttons.faceRight=!0}},window.onkeyup=e=>{switch(e.keyCode){case 37:case 65:buttons.left=!1;break;case 38:case 68:buttons.right=!1;break;case 39:case 87:buttons.forward=!1;break;case 40:case 83:buttons.backward=!1;break;case 81:buttons.faceLeft=!1;break;case 69:buttons.faceRight=!1}})}}},961:(e,t,a)=>{var s={"./Buttons":692,"./Buttons.js":692};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=961},864:(e,t,a)=>{const{loadDefault:s,loadMethods:r,loadClasses:o}=a(330),i=a(848),{validate:l}=a(162);"undefined"!=typeof window?o(["Buttons"]):console.warn("[33m%s[0m","Application runned outside the browser, window is not found, the global class won't load"),e.exports=class{constructor(){s(this),r(this,["set","control","render"])}init(){l(this.map,["data"],"map"),l(this.player,["x","y"],"player"),i(this)}}},599:(e,t,a)=>{const{toRadian:s}=a(162);e.exports={map:{cellSize:5},texture:{colour:"blue",data:{}},player:{size:1,angle:s(45),speed:.05},graphic:{totalRay:300,fov:s(45),rayStep:.05,texture:!0,depth:!1},rays:[],devMode:!1}},330:(e,t,a)=>{const s=a(599);e.exports={loadDefault:e=>Object.assign(e,s),loadMethods:(e,t)=>{t.forEach((t=>{const s=a(193)("./"+t);if("object"==typeof s)for(const t in s)e[t]=s[t];else e[t]=s}))},loadClasses:e=>{e.forEach((e=>window[e]=a(961)("./"+e)))}}},681:(e,t,a)=>{const{toRadian:s}=a(162),{moveX:r,moveY:o}=a(325);e.exports=function(e){if(e.left){let e=this.player.angle-s(90),t=this.player.speed*Math.cos(e),a=this.player.speed*Math.sin(e);r(this,t),o(this,a)}if(e.forward){let e=this.player.speed*Math.cos(this.player.angle),t=this.player.speed*Math.sin(this.player.angle);r(this,e),o(this,t)}if(e.right){let e=this.player.angle+s(90),t=this.player.speed*Math.cos(e),a=this.player.speed*Math.sin(e);r(this,t),o(this,a)}if(e.backward){let e=this.player.speed*Math.cos(this.player.angle),t=this.player.speed*Math.sin(this.player.angle);r(this,-e),o(this,-t)}e.faceLeft&&(this.player.angle-=s(1)),e.faceRight&&(this.player.angle+=s(1))}},963:(e,t,a)=>{const s=a(140),r=a(629);e.exports=function(e){const t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),this.player.xPos=this.player.x*this.map.cellSize,this.player.yPos=this.player.y*this.map.cellSize,this.rays=s(this),this.devMode&&console.log(this.rays),r(this,this.rays,e,t)}},902:(e,t,a)=>{const{assign:s,validate:r,toRadian:o}=a(162);e.exports={setMap:function(e){Object.assign(this.map,e),r(this.map,["data"],"map");let t=Math.sqrt(this.map.data.length);if(t%1!=0)throw new Error("Only n×n square map is supported");this.map.side=t,this.map.distance=this.map.side*this.map.cellSize-2*this.map.cellSize},setGraphic:function(e){e.hasOwnProperty("fov")&&(e.fov=o(e.fov)),Object.assign(this.graphic,e);let{totalRay:t,fov:a,rayStep:s,texture:r,depth:i}=this.graphic},setPlayer:function(e){e.hasOwnProperty("angle")&&(e.angle=o(e.angle)),Object.assign(this.player,e),r(this.player,["x","y"],"player")}}},193:(e,t,a)=>{var s={"./control":681,"./control.js":681,"./render":963,"./render.js":963,"./set":902,"./set.js":902};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=193},140:(e,t,a)=>{const{toIndex:s}=a(162);function r(e,t,a,s){return"vertical"==s?t>e.xPos?"left":"right":"horizontal"==s?a>e.yPos?"top":"bottom":void 0}function o(e,t,a){return(Math.abs(e)+Math.abs(t))/a-Math.floor((Math.abs(e)+Math.abs(t))/a)}function i(e,t,a){return a.data[s(a.side,Math.floor(e/a.cellSize),Math.floor(t/a.cellSize))]}e.exports=e=>{let t=e.player.angle-e.graphic.fov/2,a=e.graphic.fov/e.graphic.totalRay,l=[],n=0;for(;n<e.graphic.totalRay;){let c,h,p=e.player.xPos,f=e.player.yPos,d=e.graphic.rayStep*Math.cos(t),y=e.graphic.rayStep*Math.sin(t),u=!1;for(;!u;){c=p+d,h=f+y;let t=i(c,f,e.map);0!=t&&(u=!0,l.push({distanceX:c,distanceY:h,face:r(e.player,c,h,"vertical"),texturePos:o(f,y,e.map.cellSize),blockId:t})),t=e.map.data[s(e.map.side,Math.floor(p/e.map.cellSize),Math.floor(h/e.map.cellSize))],0!=t&&(u=!0,l.push({distanceX:c,distanceY:h,face:r(e.player,c,h,"horizontal"),texturePos:o(p,d,e.map.cellSize),blockId:t})),p+=d,f+=y,(p<0||p>e.map.side*e.map.cellSize)&&(u=!0),(f<0||f>e.map.side*e.map.cellSize)&&(u=!0)}t+=a,n++}return l}},848:e=>{e.exports=e=>{Object.entries(e.map.block).forEach((t=>{Array.isArray(t[1].texture)||(t[1].texture=[t[1].texture,t[1].texture,t[1].texture,t[1].texture]),e.texture.data[t[0]]={},t[1].texture.forEach(((a,s)=>{let r,o,i=!1;/\.(jpg||jpeg||png)$/g.test(a)?(o="image",r=new Image,r.src=a,/\.png$/g.test(a)&&(i=!0)):(o="colour",r=a),e.texture.data[t[0]][["left","top","right","bottom"][s]]={type:o,content:r,transparent:i}}))}))}},325:(e,t,a)=>{const{toIndex:s}=a(162);e.exports={moveX:function(e,t){let a=t>0?e.player.size/6:-e.player.size/6;0==e.map.data[s(e.map.side,Math.floor(e.player.x+t+a),Math.floor(e.player.y+a))]&&(e.player.x+=t)},moveY:function(e,t){let a=t>0?e.player.size/6:-e.player.size/6;0==e.map.data[s(e.map.side,Math.floor(e.player.x+a),Math.floor(e.player.y+t+a))]&&(e.player.y+=t)}}},629:e=>{e.exports=function(e,t,a,s){let r=a.width/e.graphic.totalRay;s.fillStyle="skyblue",s.fillRect(0,0,a.width,a.height),s.fillStyle="gray",s.fillRect(0,a.height/2,a.width,a.height/2),t.forEach(((t,o)=>{let i=Math.sqrt(Math.pow(t.distanceX-e.player.xPos,2)+Math.pow(t.distanceY-e.player.yPos,2))/10;0==i&&(i=.1);let l=10*i/e.map.distance,n=r*o,c=a.height/2-a.height/i/2,h=a.height/i,p=e.texture.data[t.blockId][t.face];if(e.graphic.texture){if("image"==p.type){"right"==t.face&&(t.texturePos=1-t.texturePos),"top"==t.face&&(t.texturePos=1-t.texturePos);let e=t.texturePos*p.content.width;s.drawImage(p.content,e,0,r/p.content.width,p.content.height,n,c,r,h)}else s.fillStyle=p.content,s.fillRect(n,c,r,h);e.graphic.depth&&(l*=50,s.fillStyle="right"==t.face||"left"==t.face?"rgba(65,65,65,"+l+"%)":"rgba(0,0,0,"+l+"%)",s.fillRect(n,c,r,h))}else l=50-25*l,s.fillStyle=e.graphic.depth?"right"==t.face||"left"==t.face?"hsl(240, 100%, "+l+"%)":"hsl(240, 70%, "+l+"%)":"right"==t.face||"left"==t.face?"hsl(240, 100%, 50%)":"hsl(240, 70%, 50%)",s.fillRect(n,c,r,h)}))}},162:e=>{e.exports={toRadian:e=>e*Math.PI/180,assign:(e,t,a)=>Object.entries(a).forEach((a=>e[t][a[0]]=a[1])),validate:(e,t,a)=>{t.forEach((t=>{if(!e.hasOwnProperty(t))throw new Error(`${a.charAt(0).toUpperCase()+a.slice(1)} must has "${t}" as the properties`)}))},toIndex:(e,t,a)=>a*e+t}}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}return a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(864)})()));