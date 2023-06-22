var path = require('path');
const values=require(path.resolve(__dirname,"./config/default.js"));

const loadDefault=(that)=>{
  Object.assign(that,values)
}

module.exports={loadDefault};