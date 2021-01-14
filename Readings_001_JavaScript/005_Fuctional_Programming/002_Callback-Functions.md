# Callback Functions
Let's consider the `setTimeout()` function, it allows us to define a delay in our code.
```JavaScript
setTimeout( function() { 
  console.log("start") 
}, 3000 );
    
console.log("end");
```
When we examine this function there are 2 parameters that it expects:

1.  a function
2.  a number
   
Let's talk about the number first-- it represents the delay in milliseconds, in the above example this is `3000`, and the other is a function-- whatever code we want to run after the 3000 millisecond delay

This function parameter is called by `setTimeout()` like a function. It represents something that we conventionally refer to as a "callback function", a function that is passed into another function to be called by that function.
<hr>
In JavaScript functions are treated like just any other variable type.

```JavaScript
> typeof( "hello" );
'string'
> typeof( function() {} );
'function'
```
We can declare a variable and set it equal to a function and then call that function using the variable name.
```JavaScript
var exampleFunction = function(message){
  console.log( message );
};

exampleFunction( "Hello from exampleFunction" );
```
As we saw in the example above, we can also pass a function as as a parameter into some parent function. In this case let's all this parameter callback and pass it a message.

```JavaScript
function parentFunction( callback ) {
  callback( "information from the parent function" );
}
```

We can then call the parent function like this.

```JavaScript
parentFunction(exampleFunction);
```

These sort of functions are often used with anonymous functions (functions without a name) and we could rewrite our exaple to be called like this.

```JavaScript
parentFunction( function(message) {
  console.log( message );
});
```
<hr>
Callback functions will see a lot of use when:

*   Some code needs to run after an event (user clicks a button, user visits "localhost:5000/home")
*   Making API calls (it takes some time for the data to come back from another server or our own back-end server)
*   Querying a database (it can take a while if queries are writing many rows or are joining many tables)
#
## [Previous](./001_Multi-Paradigm.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./003_Freeze.md)
#
##  [Index](../../Index.md)