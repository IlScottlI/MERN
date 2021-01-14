# The Big Freeze

Learning objectives:

*   introduce `Object.freeze() `
*   learn how we can use spread `...` to copy an array
*   learn how we can use `.slice()` and `.concat()`
*   learn how we can use `.sort()` with a callback function
<hr>

## Object.freeze()
As we've seen before, when we declare a variable using `const`, we are no longer able to set it equal to a different variable, but if the variable is an array or object we're still able to modify that object by pushing or popping values into or from it, or changing values that are stored in it.
```js
const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 
```
 If we want to prevent even those sorts of changes, we can use `Object.freeze()` to give our array or object Immutability.
```js
const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`
```
## Spread, Concat, and Slice
Let's say we have an immutable list of groceries...
```js
const groceryList = Object.freeze([
  { "item": "carrots",           "haveIngredient": false },
  { "item": "onions",            "haveIngredient": true  },
  { "item": "celery",            "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter",            "haveIngredient": true  }
]);
```
## Need Thyme
If we decide that we need to add "thyme" to the list we can use spread to make a copy of the list and add "thyme" to it
```js
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
```
the `...groceryList` at the beginning of the array is us making a copy of the objects already in groceryList, we then follow this with a comma , as if we are simply declaring an array with a new "thyme" object.

We can also use `.concat()` for this one. Concat is a method that essentially takes two arrays, glues them together and gives us back the new array.
```js
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
```
## Got the thyme?
If we find that we already have "thyme" and we want to set the "haveIngredient" to true we can write something like...
```js
const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
```
Slice is a function that can take 2 parameters and return an array of the values that have indexes between those two parameters. We can follow that up with a comma and a new object. Inside the new object we can use the spread operator to copy over the attributes from the Ingredient at index 5, and overwrite its `haveIngredient` key to be `true`.

## Ingredient not Nece-Celery
If celery is "ingredient non grata", we could remove it also using slice...
```js
  const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
```
Once again we can use slice, the first slice giving us the ingredients at indexes 0 and 1, the second slice giving us all the ingredients with indexes from 3 to the end.

<hr>

## Sorting
The sort function is really useful, however when we run it it manipulates the array it was run upon instead of giving us a new one.
```js
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
items.sort(); // this will throw an error 
```
We can however get around this with some clever use of the spread `...` operator.
```js
const sortedItems = [...items].sort();
```
This will return the Grocery List items in a sorted manor.

## Sorting gotcha!?
Sort is really handy, however there is a bit of a trap... if what we're sorting are numbers it will not return the results we're expecting
```js
const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
// this will return [10, 12, 22, 3, 5, 8 ]
```
Sort works by converting the values into strings before sorting, check out the fantastic w3schools for a nifty workaround.

## Sorting Objects
Sometimes what we want to sort based off of is an attribute inside of an object, we can still do that using sort by using a callback function. Referring back to our groceryList example from above, we could sort the ingredient objects based on the ingredient name using the following.
```js
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );
```
Notice how this time we have to write a callback function inside of sort letting it know what attribute to use when sorting.

<hr>

Read more:
*   [.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
#
## [Previous](./002_Callback-Functions.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./004_Map_and_Filter.md)
#
##  [Index](../../Index.md)