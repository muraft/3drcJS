const values=require('./config/default.js');

const loadDefault=that=>Object.assign(that,values)

const loadMethods=(that,methods)=>{
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

const loadClasses=classes=>{
  classes.forEach(c=>window[c]=require('./Classes/'+c));
}

module.exports={loadDefault,loadMethods,loadClasses};
