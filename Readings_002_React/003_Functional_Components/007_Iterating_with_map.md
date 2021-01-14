# Iterating with map
Working with lists (arrays in JavaScript) is a big part of a developer's life. Accordingly, we'll often need to iterate through arrays of data and render some JSX for each item. While some frameworks supply framework-specific ways to loop through arrays, React instead leans on a built-in array method: map. Let's briefly cover how the map method works. Consider the following code snippet:
```jsx
const nums = [1, 2, 3, 4, 5];
 
const newNums = [];
 
for(let i = 0; i < nums.length; i++) {
    newNums.push( nums[i] * 2 );
}
 
console.log( newNums ); // logs [2, 4, 6, 8, 10]
```
While this works, it isn't very clean. Note that we had to create the local variable i as an iterator to reference the appropriate index in the array. Also, we continuously mutated the newNums array. In recent years, functional programming has become increasingly popular. Although we're not going to take a detour into functional programming, the functional paradigm holds that functions should have the following characteristics:

*   Functions should always return the same value given the same input(s).
*   No side effects: when invoked, functions should not modify values that are created outside their immediate scope.
  
Let's see how we could accomplish the above using the map method for arrays in JavaScript.
```jsx
const nums = [1, 2, 3, 4, 5];
 
function double(num) {
    return num * 2;
}
 
const newNums = nums.map( doublecopy );
 
console.log( newNums ); // logs [2, 4, 6, 8,
```

We created a pure and transparent function that will always return double the supplied argument, given that the argument is a number. Next, we create a new constant variable called newNums that is assigned to the result of invoking the map method on nums with an argument of double. Notice that we were able to pass in the entire definition of double when we called map. Functions are "first-class citizens" in JavaScript: that is, they can be passed around in the same way as other values. In general, you can use the map method whenever you want to transform each element of an array according to a function. An important thing to note is that the result of calling the map method is a new array; it doesn't change the original.

## Map in React
Now let's see how we can apply this in React.
```jsx
import React from 'react';
 
    
const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>{
            groceryList.map( (item, i) => 
                <li key={ i }>{ item }</li>
            )
        }</ul>
    ); 
}
    
export default Groceries;
```
In this component we have a list of grocery items and we return an unordered list. Inside of the `<ul>` we use map to transform the array of groceries into an array of `<li>`, and for each element, we used its index `i` as the key to silence a React warning. Where did the index come from? The function we supply can optionally take in two additional arguments in addition to the current value: the current index, and a reference to the array itself. Thus, the entire signature of a map callback looks like the following:
```jsx
function(currentVal, currentIndex, thisArray) {
    // transform the val here
}
```
Further Reading:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://reactjs.org/docs/lists-and-keys.html

#
## [Previous](./006_useReducer.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./008_Lifting_State.md)
#
##  [Index](../../Index.md)