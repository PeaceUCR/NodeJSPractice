let obj1 = require('./checkModuleRunTimes.js');

obj1.setValue(2);

//get from cache
let obj2 = require('./checkModuleRunTimes.js');

console.log('outside:'+obj2.val);