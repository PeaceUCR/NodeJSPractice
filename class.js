//nodeJS not support the es2015
//http://node.green/
//getter setter
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
class Person{
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	print(){
		//if no let, report error...
		for(let key in this){
			console.log("Person."+key+"="+this[key]);
		}
	}
}


class Student extends Person{
	constructor(firstname, lastname, course){
		super(firstname, lastname);
		this.course = course;
	}

	print(){
		for(let key in this){
			console.log("Student."+key+"="+this[key]);
		}
	}
}
//https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node
//nodejs not support import/export default
module.exports = Student;