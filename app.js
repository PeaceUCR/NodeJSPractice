// node app.js
/*
var c = require('./proto.js');
var p = new c.person("adam","he");

var s = new c.student("adam","he","math");
//p.print();
s.print();
//console.log(s.constructor);
*/
var Person = require('./class.js');

let p = new Person("adam", "he", "math");
p.print();



