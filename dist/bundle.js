!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tdrc=e():t.Tdrc=e()}(self,(()=>(()=>{var t={692:t=>{t.exports=class{constructor(){this.left=!1,this.right=!1,this.forward=!1,this.backward=!1,this.faceLeft=!1,this.faceRight=!1}keyboard(t="default"){"default"==t&&(window.onkeydown=t=>{switch(t.keyCode){case 37:case 65:buttons.left=!0;break;case 38:case 68:buttons.right=!0;break;case 39:case 87:buttons.forward=!0;break;case 40:case 83:buttons.backward=!0;break;case 81:buttons.faceLeft=!0;break;case 69:buttons.faceRight=!0}},window.onkeyup=t=>{switch(t.keyCode){case 37:case 65:buttons.left=!1;break;case 38:case 68:buttons.right=!1;break;case 39:case 87:buttons.forward=!1;break;case 40:case 83:buttons.backward=!1;break;case 81:buttons.faceLeft=!1;break;case 69:buttons.faceRight=!1}})}}},961:(t,e,a)=>{var s={"./Buttons":692,"./Buttons.js":692};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id=961},864:(t,e,a)=>{const{loadDefault:s,loadMethods:r,loadClasses:o}=a(330),i=a(848);"undefined"!=typeof window?o(["Buttons"]):console.warn("[33m%s[0m","Application runned outside the browser, window is not found, the global class won't load"),t.exports=class{constructor(){s(this),r(this,["set","control","render"])}init(){i(this)}}},599:(t,e,a)=>{const{toRadian:s}=a(162);t.exports={map:{cellSize:5},texture:{colour:"blue",data:{}},player:{x:1,y:1,size:1,angle:s(45),speed:.05},graphic:{totalRay:300,fov:s(45),rayStep:.05,texture:!0,depth:!1},rays:[],devMode:!1}},330:(t,e,a)=>{const s=a(599);t.exports={loadDefault:t=>Object.assign(t,s),loadMethods:(t,e)=>{e.forEach((e=>{const s=a(193)("./"+e);if("object"==typeof s)for(const e in s)t[e]=s[e];else t[e]=s}))},loadClasses:t=>{t.forEach((t=>window[t]=a(961)("./"+t)))}}},681:(t,e,a)=>{const{toRadian:s}=a(162),{moveX:r,moveY:o}=a(325);t.exports=function(t){if(t.left){let t=this.player.angle-s(90),e=this.player.speed*Math.cos(t),a=this.player.speed*Math.sin(t);r(this,e),o(this,a)}if(t.forward){let t=this.player.speed*Math.cos(this.player.angle),e=this.player.speed*Math.sin(this.player.angle);r(this,t),o(this,e)}if(t.right){let t=this.player.angle+s(90),e=this.player.speed*Math.cos(t),a=this.player.speed*Math.sin(t);r(this,e),o(this,a)}if(t.backward){let t=this.player.speed*Math.cos(this.player.angle),e=this.player.speed*Math.sin(this.player.angle);r(this,-t),o(this,-e)}t.faceLeft&&(this.player.angle-=s(1)),t.faceRight&&(this.player.angle+=s(1))}},963:(t,e,a)=>{const s=a(140),r=a(629);t.exports=function(t){const e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this.player.xPos=this.player.x*this.map.cellSize,this.player.yPos=this.player.y*this.map.cellSize,this.rays=s(this),this.devMode&&console.log(this.rays),r(this,this.rays,t,e)}},902:(t,e,a)=>{const{assign:s,validate:r,toRadian:o}=a(162);t.exports={setMap:function(t){s(this,"map",t),r(this.map,["data"],"map");let e=Math.sqrt(this.map.data.length);if(e%1!=0)throw new Error("Only n×n square map is supported");this.map.side=e,this.map.distance=this.map.side*this.map.cellSize-2*this.map.cellSize},setGraphic:function(t){t.hasOwnProperty("fov")&&(t.fov=o(t.fov)),s(this,"graphic",t);let{totalRay:e,fov:a,rayStep:r,texture:i,depth:l}=this.graphic}}},193:(t,e,a)=>{var s={"./control":681,"./control.js":681,"./render":963,"./render.js":963,"./set":902,"./set.js":902};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id=193},140:(t,e,a)=>{const{toIndex:s}=a(162);function r(t,e,a,s){return"vertical"==s?e>t.xPos?"left":"right":"horizontal"==s?a>t.yPos?"top":"bottom":void 0}function o(t,e,a){return(Math.abs(t)+Math.abs(e))/a-Math.floor((Math.abs(t)+Math.abs(e))/a)}function i(t,e,a){return a.data[s(a.side,Math.floor(t/a.cellSize),Math.floor(e/a.cellSize))]}t.exports=t=>{let e=t.player.angle-t.graphic.fov/2,a=t.graphic.fov/t.graphic.totalRay,l=[],n=0;for(;n<t.graphic.totalRay;){let c,h,p=t.player.xPos,f=t.player.yPos,d=t.graphic.rayStep*Math.cos(e),u=t.graphic.rayStep*Math.sin(e),y=!1;for(;!y;){c=p+d,h=f+u;let e=i(c,f,t.map);0!=e&&(y=!0,l.push({distanceX:c,distanceY:h,face:r(t.player,c,h,"vertical"),texturePos:o(f,u,t.map.cellSize),blockId:e})),e=t.map.data[s(t.map.side,Math.floor(p/t.map.cellSize),Math.floor(h/t.map.cellSize))],0!=e&&(y=!0,l.push({distanceX:c,distanceY:h,face:r(t.player,c,h,"horizontal"),texturePos:o(p,d,t.map.cellSize),blockId:e})),p+=d,f+=u,(p<0||p>t.map.side*t.map.cellSize)&&(y=!0),(f<0||f>t.map.side*t.map.cellSize)&&(y=!0)}e+=a,n++}return l}},848:t=>{t.exports=t=>{Object.entries(t.map.block).forEach((e=>{Array.isArray(e[1].texture)||(e[1].texture=[e[1].texture,e[1].texture,e[1].texture,e[1].texture]),t.texture.data[e[0]]={},e[1].texture.forEach(((a,s)=>{let r,o,i=!1;/\.(jpg||jpeg||png)$/g.test(a)?(o="image",r=new Image,r.src=a,/\.png$/g.test(a)&&(i=!0)):(o="colour",r=a),t.texture.data[e[0]][["left","top","right","bottom"][s]]={type:o,content:r,transparent:i}}))}))}},325:(t,e,a)=>{const{toIndex:s}=a(162);t.exports={moveX:function(t,e){let a=e>0?t.player.size/6:-t.player.size/6;0==t.map.data[s(t.map.side,Math.floor(t.player.x+e+a),Math.floor(t.player.y+a))]&&(t.player.x+=e)},moveY:function(t,e){let a=e>0?t.player.size/6:-t.player.size/6;0==t.map.data[s(t.map.side,Math.floor(t.player.x+a),Math.floor(t.player.y+e+a))]&&(t.player.y+=e)}}},629:t=>{t.exports=function(t,e,a,s){let r=a.width/t.graphic.totalRay;s.fillStyle="skyblue",s.fillRect(0,0,a.width,a.height),s.fillStyle="gray",s.fillRect(0,a.height/2,a.width,a.height/2),e.forEach(((e,o)=>{let i=Math.sqrt(Math.pow(e.distanceX-t.player.xPos,2)+Math.pow(e.distanceY-t.player.yPos,2))/10;0==i&&(i=.1);let l=10*i/t.map.distance,n=r*o,c=a.height/2-a.height/i/2,h=a.height/i,p=t.texture.data[e.blockId][e.face];if(t.graphic.texture){if("image"==p.type){"right"==e.face&&(e.texturePos=1-e.texturePos),"top"==e.face&&(e.texturePos=1-e.texturePos);let t=e.texturePos*p.content.width;s.drawImage(p.content,t,0,r/p.content.width,p.content.height,n,c,r,h)}else s.fillStyle=p.content,s.fillRect(n,c,r,h);t.graphic.depth&&(l*=50,s.fillStyle="right"==e.face||"left"==e.face?"rgba(65,65,65,"+l+"%)":"rgba(0,0,0,"+l+"%)",s.fillRect(n,c,r,h))}else l=50-25*l,s.fillStyle=t.graphic.depth?"right"==e.face||"left"==e.face?"hsl(240, 100%, "+l+"%)":"hsl(240, 70%, "+l+"%)":"right"==e.face||"left"==e.face?"hsl(240, 100%, 50%)":"hsl(240, 70%, 50%)",s.fillRect(n,c,r,h)}))}},162:t=>{t.exports={toRadian:t=>t*Math.PI/180,assign:(t,e,a)=>Object.entries(a).forEach((a=>t[e][a[0]]=a[1])),validate:(t,e,a)=>{e.forEach((e=>{if(!t.hasOwnProperty(e))throw new Error(`${a.charAt(0).toUpperCase()+a.slice(1)} must has "${e}"`)}))},toIndex:(t,e,a)=>a*t+e}}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,a),o.exports}return a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a(864)})()));