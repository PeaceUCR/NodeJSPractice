let obj = {
	val: 0,
	setValue: function(v){
		this.val = v;
	}
}

console.log("in module:"+obj.val);

module.exports = obj;