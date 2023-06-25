const values=require('./config/default.js');

const loadDefault=that=>Object.assign(that,values)

const loadMethods=that=>{
  const methods=['set','control','render']
  methods.forEach(method=>{
    const imported=require('./methods/'+method);
    if(typeof imported=='object'){
      for (const variable in imported){
        that[variable]=imported[variable];
      }
    }
    else that[method]=imported;
  })
}

module.exports={loadDefault,loadMethods};
