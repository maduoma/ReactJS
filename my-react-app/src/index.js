import React from 'react';
import ReactDOM from 'react-dom';
import { Person } from './person.js';
import printLabel, { Teacher } from './teacher';

const element = <h1>Hello World!</h1>;
ReactDOM.render(element, document.getElementById('root'));

const person = {
  name: 'John',
  walk() {
    console.log(this);
  },
};
printLabel('Accessing an object member with dot notation');
person.walk();
printLabel('Accessing an object member with bracket notation');
person['name'] = 'Madu';
console.log(person.name);
printLabel('Accessing an object member with bracket notation');
const name = 'name';
const myName = (person[name.value] = 'Brian');
console.log(myName);
printLabel('Reference to to walk function');
const walk1 = person.walk;
console.log(walk1);
printLabel('With bind function');
const walk = person.walk.bind(person);
walk();
printLabel('Without bind function');
walk1();
printLabel('Spread Example');
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = ['a', ...numbers1, 'b', ...numbers2, 'c'];
console.log(combinedNumbers);
printLabel('Looping through an array');
//create an array like so:
const colors = ['red', 'blue', 'green'];
//you can loop through an array like this:
let total = 0;
for (let i = 0; i < colors.length; i++) {
  total += i;
  console.log(colors[i], ':', i);
}
console.log('Total Iteration: ', total);
printLabel('Using filter function');
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];
const myJobs = jobs.filter((job) => job.isActive);
console.log(myJobs);
printLabel('Using Map to list contact');
const contacts = [
  { name: 'Madu', contact: '0803' },
  { name: 'Brian', contact: '0903' },
  { name: 'Ethan', contact: '0703' },
];
const myContact = contacts.map((contact) => contact.contact);
console.log(myContact);

const myColors = ['Red', 'Green', 'Blue'];
const items = myColors.map((color) => `<li>${color}</li>`);
console.log(items);

printLabel('Using Map with isActive');
const myMap = jobs.map((job) => job.isActive);
console.log(myMap);

printLabel('Arrow function and "this"');
const myPerson = {
  talk() {
    setTimeout(() => {
      console.log('this', this);
    }, 1000);
  },
};
myPerson.talk();

printLabel('Destructuring Example');
//destructuring in javascript
const objA = {
  prop1: 'foo',
  prop2: {
    prop2a: 'bar',
    prop2b: 'baz',
  },
};

// Deconstruct nested props
const {
  prop1,
  prop2: { prop2a, prop2b },
} = objA;

console.log(prop1); // 'foo'
console.log(prop2a); // 'bar'
console.log(prop2b); // 'baz'
// console.log(prop2); // Undefined
printLabel('Destructuring Example');
const address = {
  street: '51 Joe Okoye',
  city: 'Port Harcourt',
  country: 'Nigeria',
};

// Use desctructuring to avoid repeating address as shown below:
// const street = address.street;
// const city = address.city;
// const country = address.country;

// Destructuring
const { street, city, country } = address;
console.log(street, city, country);

printLabel('From Person Class');
const person1 = new Person('Madu');
person1.walk();
printLabel('From Teacher class');
const teacher = new Teacher('Mosh', 'B.Eng');
teacher.teach();
//console.log(teacher.teach.bind(this));
// console.log(teacher);
