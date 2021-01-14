# Map and Filter
One of the cool things about functional programming is that we can avoid writing loops in quite a few situations. Instead of reaching for for loops or while loops, we can make use of functions that are designed for many of the situations we used loops in the past.

<hr>

## .map()
One of the functions that we'll be using most frequently is map. Map will make a copy of an array and apply our own twist to it... using a callback function that takes in each element of the array returning what we want to do to each element
```js
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
```
This will take a list of items and return an array of strings resembling html "list items"... 

`["<li>pearl onions</li>", "<li>cremini mushrooms</li>", "<li>thyme</li>"]`

We can also use map with an array of numbers
```js
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
```
This will create list of cubed numbers. `[1, 8, 27, 64, 125]`

Map is a function that applies a callback function to each item in an array and returns that new array 

<hr>

## .filter()
Sometimes we want to get an array with only some of the values, we can do something similar and provide a callback function, this time one that returns true if we want the value of false if we don't want the value
```js
const values = [1, 2, 3, 4, 5];
const evens = numbers.filter( val => val % 2 === 0 );
```
This will create a list of only the even values... `[2, 4]` if we wanted the odds we could get them by changing the `===` to `!==`

If we want only the groceries that have the letter "o" in them we could write...
```js
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
```
We can do anything we want with that callback function as long as it returns true or false. We can even chain filter and map together if we want to.
```js
const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
```
This will filter out the even numbers and cube the ones that are left over. `[1, 27, 125]`

<hr>

## Read more:
*   [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
#
## [Previous](./003_Freeze.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./../006_NPM/001_NPM.md)
#
##  [Index](../../Index.md)