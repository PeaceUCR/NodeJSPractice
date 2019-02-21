console.log("0");

setTimeout(function(){
	console.log("2");
}, 0);

setTimeout(function(){
	console.log("3");
}, 1000);

setImmediate(function(){
    console.log("setImmediate");
});

let p0 = new Promise(function(resolve, reject){
						console.log("p0");
						resolve("p0");
					}).then(function(r0){
					   console.log(r0 +"Promise");
					});

let p1 = new Promise(function(resolve, reject){
						setTimeout(function(){
							resolve("p1");
						},0);
					}).then(function(r1){
					   console.log(r1+"Promise");
					});

let p2 = new Promise(function(resolve, reject){
						setTimeout(function(){
							resolve("p2");
						},1000);
					}).then(function(r2){
					   console.log(r2+"Promise");
					});


console.log("1");