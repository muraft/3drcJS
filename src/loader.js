const values=require('./config/default.js');

const loadDefault=that=>{
  Object.assign(that,values)
}

const loadModules=that=>{
  const modules=['control','loadBlock','set','utils']
  modules.forEach(module=>{
    const imported=require('./modules/'+module);
    for (const variable in imported){
      that[variable]=imported[variable];
    }
  })
}

module.exports={loadDefault,loadModules};
