import { Person } from './person';

//Global function to be called anywhere.
export default function printLabel(label) {
  console.log('================');
  console.log(label);
  console.log('================');
}
export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log('Teach');
  }
}
// const teacher = new Teacher('Madu', 'B.Eng');
// console.log(teacher);
// console.log(teacher.teach());
