!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tdrc=e():t.Tdrc=e()}(self,(()=>(()=>{var t={864:(t,e,a)=>{const{loadDefault:r,loadMethods:o}=a(330),s=a(848);t.exports=class{constructor(){r(this),o(this)}init(){s(this)}}},599:(t,e,a)=>{const{toRadian:r}=a(162);t.exports={map:{cellSize:5},texture:{colour:"blue",data:{}},player:{x:1,y:1,size:1,angle:r(45),speed:.05},graphic:{totalRay:300,fov:r(45),rayStep:.05,texture:!0,depth:!1},rays:[],devMode:!1}},330:(t,e,a)=>{const r=a(599);t.exports={loadDefault:t=>Object.assign(t,r),loadMethods:t=>{["set","control","render"].forEach((e=>{const r=a(193)("./"+e);if("object"==typeof r)for(const e in r)t[e]=r[e];else t[e]=r}))}}},681:(t,e,a)=>{const{toRadian:r}=a(162),{moveX:o,moveY:s}=a(325);t.exports=function(t){if(t.left){let t=this.player.angle-r(90),e=this.player.speed*Math.cos(t),a=this.player.speed*Math.sin(t);o(this,e),s(this,a)}if(t.forward){let t=this.player.speed*Math.cos(this.player.angle),e=this.player.speed*Math.sin(this.player.angle);o(this,t),s(this,e)}if(t.right){let t=this.player.angle+r(90),e=this.player.speed*Math.cos(t),a=this.player.speed*Math.sin(t);o(this,e),s(this,a)}if(t.backward){let t=this.player.speed*Math.cos(this.player.angle),e=this.player.speed*Math.sin(this.player.angle);o(this,-t),s(this,-e)}t.faceLeft&&(this.player.angle-=r(1)),t.faceRight&&(this.player.angle+=r(1))}},963:(t,e,a)=>{const r=a(140),o=a(629);t.exports=function(t){const e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this.player.xPos=this.player.x*this.map.cellSize,this.player.yPos=this.player.y*this.map.cellSize,this.rays=r(this),this.devMode&&console.log(this.rays),o(this,this.rays,t,e)}},902:(t,e,a)=>{const{assign:r,validate:o,toRadian:s}=a(162);t.exports={setMap:function(t){r(this,"map",t),o(this.map,["data"],"map");let e=Math.sqrt(this.map.data.length);if(e%1!=0)throw new Error("Only n×n square map is supported");this.map.side=e,this.map.distance=this.map.side*this.map.cellSize-2*this.map.cellSize},setGraphic:function(t){t.hasOwnProperty("fov")&&(t.fov=s(t.fov)),r(this,"graphic",t);let{totalRay:e,fov:a,rayStep:o,texture:i,depth:l}=this.graphic}}},193:(t,e,a)=>{var r={"./control":681,"./control.js":681,"./render":963,"./render.js":963,"./set":902,"./set.js":902};function o(t){var e=s(t);return a(e)}function s(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id=193},140:(t,e,a)=>{const{toIndex:r}=a(162);function o(t,e,a,r){return"vertical"==r?e>t.xPos?"left":"right":"horizontal"==r?a>t.yPos?"top":"bottom":void 0}function s(t,e,a){return(Math.abs(t)+Math.abs(e))/a-Math.floor((Math.abs(t)+Math.abs(e))/a)}function i(t,e,a){return a.data[r(a.side,Math.floor(t/a.cellSize),Math.floor(e/a.cellSize))]}t.exports=t=>{let e=t.player.angle-t.graphic.fov/2,a=t.graphic.fov/t.graphic.totalRay,l=[],h=0;for(;h<t.graphic.totalRay;){let p,n,c=t.player.xPos,f=t.player.yPos,d=t.graphic.rayStep*Math.cos(e),y=t.graphic.rayStep*Math.sin(e),u=!1;for(;!u;){p=c+d,n=f+y;let e=i(p,f,t.map);0!=e&&(u=!0,l.push({distanceX:p,distanceY:n,face:o(t.player,p,n,"vertical"),texturePos:s(f,y,t.map.cellSize),blockId:e})),e=t.map.data[r(t.map.side,Math.floor(c/t.map.cellSize),Math.floor(n/t.map.cellSize))],0!=e&&(u=!0,l.push({distanceX:p,distanceY:n,face:o(t.player,p,n,"horizontal"),texturePos:s(c,d,t.map.cellSize),blockId:e})),c+=d,f+=y,(c<0||c>t.map.side*t.map.cellSize)&&(u=!0),(f<0||f>t.map.side*t.map.cellSize)&&(u=!0)}e+=a,h++}return l}},848:t=>{t.exports=t=>{Object.entries(t.map.block).forEach((e=>{Array.isArray(e[1].texture)||(e[1].texture=[e[1].texture,e[1].texture,e[1].texture,e[1].texture]),t.texture.data[e[0]]={},e[1].texture.forEach(((a,r)=>{let o,s,i=!1;/\.(jpg||jpeg||png)$/g.test(a)?(s="image",o=new Image,o.src=a,/\.png$/g.test(a)&&(i=!0)):(s="colour",o=a),t.texture.data[e[0]][["left","top","right","bottom"][r]]={type:s,content:o,transparent:i}}))}))}},325:(t,e,a)=>{const{toIndex:r}=a(162);t.exports={moveX:function(t,e){let a=e>0?t.player.size/6:-t.player.size/6;0==t.map.data[r(t.map.side,Math.floor(t.player.x+e+a),Math.floor(t.player.y+a))]&&(t.player.x+=e)},moveY:function(t,e){let a=e>0?t.player.size/6:-t.player.size/6;0==t.map.data[r(t.map.side,Math.floor(t.player.x+a),Math.floor(t.player.y+e+a))]&&(t.player.y+=e)}}},629:t=>{t.exports=function(t,e,a,r){let o=a.width/t.graphic.totalRay;r.fillStyle="skyblue",r.fillRect(0,0,a.width,a.height),r.fillStyle="gray",r.fillRect(0,a.height/2,a.width,a.height/2),e.forEach(((e,s)=>{let i=Math.sqrt(Math.pow(e.distanceX-t.player.xPos,2)+Math.pow(e.distanceY-t.player.yPos,2))/10;0==i&&(i=.1);let l=10*i/t.map.distance,h=o*s,p=a.height/2-a.height/i/2,n=a.height/i,c=t.texture.data[e.blockId][e.face];if(t.graphic.texture){if("image"==c.type){"right"==e.face&&(e.texturePos=1-e.texturePos),"top"==e.face&&(e.texturePos=1-e.texturePos);let t=e.texturePos*c.content.width;r.drawImage(c.content,t,0,o/c.content.width,c.content.height,h,p,o,n)}else r.fillStyle=c.content,r.fillRect(h,p,o,n);t.graphic.depth&&(l*=50,r.fillStyle="right"==e.face||"left"==e.face?"rgba(65,65,65,"+l+"%)":"rgba(0,0,0,"+l+"%)",r.fillRect(h,p,o,n))}else l=50-25*l,r.fillStyle=t.graphic.depth?"right"==e.face||"left"==e.face?"hsl(240, 100%, "+l+"%)":"hsl(240, 70%, "+l+"%)":"right"==e.face||"left"==e.face?"hsl(240, 100%, 50%)":"hsl(240, 70%, 50%)",r.fillRect(h,p,o,n)}))}},162:t=>{t.exports={toRadian:t=>t*Math.PI/180,assign:(t,e,a)=>Object.entries(a).forEach((a=>t[e][a[0]]=a[1])),validate:(t,e,a)=>{e.forEach((e=>{if(!t.hasOwnProperty(e))throw new Error(`${a.charAt(0).toUpperCase()+a.slice(1)} must has "${e}"`)}))},toIndex:(t,e,a)=>a*t+e}}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,a),s.exports}return a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a(864)})()));