# About Promises


Up until now when we have been working with JavaScript we have been writing code that is synchronous.


```jsx
// some example code you might write
const myArray = doSomething();
doSomethingToMyArray(myArray);
console.log("This message will wait until the above lines complete");
```

JavaScript will run our code line by line and also know to wait for whatever is being executed to finish before moving on to the next line. This is a very good thing, as if the `doSomething` function happens to take a while to execute we don't have to worry if the the `myArray` variable will be undefined when it gets passed into the `doSomethingToMyArray` function.



However, as we start exploring getting information from either outside sources, or our own Back-End server, we need to be able to write code that gracefully receives data, which often can take an indeterminate amount of time to arrive, and doesn't lock up the app while it waits for the data to come back.



To this end we will be introducing a new concept, a design pattern called Promises. 



## What is a Promise?


A Promise is a pattern where the eventual response (and how long it will take to receive it) is not known. 



Promises have 3 states...

Pending | Resolved | Rejected |
------------ | ------------- | ---------------
the outcome is not yet determined | the outcome is completed successfully | the outcome is completed with errors |

<br>

An example Promise would look like the following...


```jsx
const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
```

Try changing the day in the above `if` statement so you get to see both the resolve and the reject code run. Where are each of the following handled?



While the promise is unfulfilled any code that comes after it is free to run. We also have two distinct methods that get called where we handle the case where the promise is resolved `.then()` and the case where the promise is rejected `.catch()`. 


## Advantages of Promises
Better control of asynchronous code flow
Easy to read
Avoiding "callback hell"
## External Resources
*   [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
*   [JavaScript Promises: an Introduction | Web Fundamentals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#
## [Previous](./../003_Functional_Components/014_Custom_Hooks.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./002_Intro_to_Rest_APIs.md)
#
##  [Index](../../Index.md)