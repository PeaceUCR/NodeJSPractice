console.log("I'm First");

setImmediate(function () {
  console.log('Im setImmediate');
});

setTimeout(function(){
	console.log('Im setTimeout 0');
},0)


console.log("I'm Second");

process.nextTick(function () {
  console.log('Im nextTick');
});

console.log("I'm Last");
/*
I'm First
I'm Second
I'm Last
Im nextTick
Im setTimeout 0
Im setImmediate
*/
