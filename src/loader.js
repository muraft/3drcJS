const values=require('./config/default.js');

const loadDefault=(that)=>{
  Object.assign(that,values)
}

module.exports={loadDefault};
