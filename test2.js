/*

function add(x){
	return function(y){
		return x+y;
	}
}


console.log(add(1)(2));
*/

/*
function add(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}
console.log(add(1)(2)(3)()); //6
console.log(add(1)(1)(1)(1)(1)(1)()); //6
*/

