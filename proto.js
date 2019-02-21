function Person(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.print = function(){
	for(key in this){
		console.log("Person."+key+"="+this[key]);
	}
}


function Student(firstname, lastname, course){
	Person.call(this, firstname, lastname);
	this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
//overide
Student.prototype.print = function(){
	for(key in this){
		console.log("Student."+key+"="+this[key]);
	}
}

module.exports = {
	person: Person,
	student: Student
};