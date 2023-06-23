const values=require('./config/default.js');

const loadDefault=that=>{
  Object.assign(that,values)
}

const loadMethods=that=>{
  const methods=['set','control','render']
  methods.forEach(method=>{
    const imported=require('./methods/'+method);
    for (const variable in imported){
      that[variable]=imported[variable];
    }
  })
}

module.exports={loadDefault,loadMethods};
