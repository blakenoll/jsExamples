var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(firstName, middleInitial, lastName, position) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.position = position;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Teacher;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Blake", "J", "Noll");
var teacher = new Teacher("Luke", "B", "Skywalker", "Jedi Master");
console.log(greeter(user));
console.log(greeter(teacher));
