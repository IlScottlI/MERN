// What is Destructuring?
// According to Mozilla, "destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
// or properties from objects into distinct variables." 
// Did you follow that? 
// It basically means that you have a data structure, an array or object, and you want information from it to be its own variable. 
// Before we look at how to achieve that through destructuring let us examine how we might currently perform this task. 

// Here we have our initial data structures.
// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// Assume we want email from person and the first animal as standalone variables. Before ES6 that might look like this:

// BEFORE ES6
// var email = person.email;
// var firstAnimal = animals[0];
// Let's do that again, but with destructuring assignment:

// AFTER ES6
// const { email } = person;
// const [firstAnimal, secondAnimal] = animals;
// console.log(email);
// // => bob@marley.com
// console.log(firstAnimal, secondAnimal);
// => horse

// In order to destructure, our declarations need to match the data type to the right of the equal sign. For objects, 
// list the properties you want to copy into variables and for arrays, create variables to capture content at certain positions. 
// Interesting, but is it really more useful than our pre-ES6 example? What happens to the original content?
// Good questions. The former will be best answered with another example. For the latter; the original content is unchanged. 
// Destructuring does not destroy the origin data, it merely makes copies of it and sets new variables.
// Let's expand our previous scenario. Now we want email and password from person and the first three strings from animals.

// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];


// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// const [, otherRandomCar] = cars
// //Predict the output
// console.log(randomCar) // -> Tesla
// console.log(otherRandomCar) // -> Mercedes


// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name); // This will fail!
// console.log(otherName);

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;
// //Predict the output
// console.log(password); // -> 12345
// console.log(hashedPassword); // -> undefined

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [, first] = numbers;
// const [, , , second] = numbers;
// const [, , , , , , , , third] = numbers;
// //Predict the output
// console.log(first == second); // -> false
// console.log(first == third); // -> true


// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [, willThisWork] = secondKey;
// //Predict the output
// console.log(key);// -> value
// console.log(secondKey);// -> [ 1, 5, 1, 8, 3, 3 ]
// console.log(secondKey[0]);// -> 1
// console.log(willThisWork);// -> 5