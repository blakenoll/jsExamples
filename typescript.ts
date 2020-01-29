class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

class Teacher {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
    public position: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Blake", "J", "Noll");

let teacher = new Teacher("Luke", "B", "Skywalker", "Jedi Master");

console.log(greeter(user));
console.log(greeter(teacher));
