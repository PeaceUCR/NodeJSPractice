let a = [1,2,3,4,'abc','defg'];


/* true
console.log(Array.isArray(a));
*/
//loop
/*
for(let i=0;i<a.length;i++){
	console.log(a[i]);
}
*/

//loop
/*
a.forEach(function(item, index, array){
	console.log(array+item+index);
});

*/
/*
console.log(a.map(function(item, index, array){
	return index+item;
}));
*/

/*
console.log(a.reduce(function(accumulater, currentValue, currentIndex, array){
	return accumulater+currentValue;
}));
*/

//console.log(a.reverse());
//console.log(a.join('~'));

/*
//keep the value with true
console.log(a.filter(function(currentValue, index, array){
	return typeof currentValue === 'string';
}));
*/

/*
console.log(a.concat([9,8,7]));
*/
/*
console.log(a.sort(function(a,b){
	return b-a;
}));
*/

/*
let map = [1,2,3,[4,5,6,[7,8],9],0];

let result =[]
function flat(map, result){
	map.forEach(function(item, index, array){
		//if(Array.isArray(item)){
		if(item.constructor === Array){
			flat(item, result);
		}else{
			result.push(item);
		}
	})

};

flat(map, result);

console.log(result);
*/

console.log("abcdefg".split(""));
