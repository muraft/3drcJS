(()=>{var t={599:(t,o,e)=>{const{toRadian:r}=e(162);t.exports={map:{cellSize:5},texture:{colour:"blue",data:{}},player:{x:1,y:1,size:1,angle:r(45),speed:.05},graphic:{totalRay:300,fov:r(45),rayStep:.05,texture:!0,depth:!1},rays:0}},330:(t,o,e)=>{const r=e(599);t.exports={loadDefault:t=>{Object.assign(t,r)},loadModules:t=>{["control","loadBlock","set","utils"].forEach((o=>{const r=e(665)("./"+o);for(const o in r)t[o]=r[o]}))}}},508:()=>{},848:()=>{},714:()=>{},162:function(t){t.exports={toRadian:t=>t*Math.PI/180,assign:(t,o)=>Object.entries(o).forEach((o=>this[t][o[0]]=o[1])),validate:(t,o,e)=>{o.forEach((o=>{if(!t.hasOwnProperty(o))throw new Error(`${e.charAt(0).toUpperCase()+e.slice(1)} must has "${o}"`)}))},toIndex:(t,o)=>o*this.map.side+t}},665:(t,o,e)=>{var r={"./control":508,"./control.js":508,"./loadBlock":848,"./loadBlock.js":848,"./set":714,"./set.js":714,"./utils":162,"./utils.js":162};function s(t){var o=a(t);return e(o)}function a(t){if(!e.o(r,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id=665}},o={};function e(r){var s=o[r];if(void 0!==s)return s.exports;var a=o[r]={exports:{}};return t[r].call(a.exports,a,a.exports,e),a.exports}e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),(()=>{const{loadDefault:t,loadModules:o}=e(330);console.log(new class{constructor(){t(this),o(this)}})})()})();