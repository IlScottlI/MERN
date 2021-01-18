# async/await
So far, we've used promises pretty extensively on both the client side and the server side. In general, promises give us a nice way to handle asynchronous actions like making API calls, querying a database, etc. However, what should we do when we want to kick off another asynchronous action after a promise has resolved? We can nest promises, but this can become unreadable very quickly. Consider the following example with two functions (firstFunc and secondFunc), both of which return a promise:
```js
function oneAfterAnother(startingVal) {
    firstFunc(startingVal)
        .then(firstResult => {
            secondFunc(firstResult)
                .then(secondResult => /* do something with the second result */)
                .catch(console.log)
        })
        .catch(console.log);
}
```
We're nesting promises to ensure we have access to the first result before invoking the second function. We're starting to get into so-called "callback hell," a situation in which our code creeps to the right and it becomes difficult to follow the flow of execution. Also, notice that there are two possible error states that we have to code for: the first promise could reject and/or the second promise can also reject. How can we resolve this (pun intended)?

One way is to flatten out the nesting and return a promise from our first `then` callback as in the following:
```js
function oneAfterAnother(startingVal) {
    firstFunc(startingVal)
        .then(secondFunc) // equivalent to .then(firstResult => secondFunc(firstResult))
        .then(secondResult => /* do something with the second result */)
        .catch(console.log); // logs out error if thrown
}
```
This is better, but it's still a bit callback heavy. Fortunately, JavaScript, in the form of ES7 introduced a way for us to write asynchronous code such that it looks synchronous. It effectively allows us to "pause" the execution of our code until one or more promises have resolved. There are two key ingredients to make use of the async/await syntax:

1.  Designate the outer function as `async`: this allows us to "await" the resolution of promises inside the body.
2.  Inside the function body, use the `await` keyword in front of the promise(s) we want to resolve before moving forward.
Let's see the above function rewritten in an async/await fashion:
```js
async function oneAfterAnother(startingVal) {
    const firstResult = await firstFunc(startingVal);
    const secondResult = await secondFunc(firstResult);
 
    return secondResult;
}
```
Notice how readable this has become; we simply wait for the first promise to resolve before invoking the second function. It looks just like synchronous code!

### __Caveats__
Chained calls to then or catch can still be connected to the awaited promise. If not, however, you will need to wrap your code in a try/catch block in case your promise is rejected. Otherwise, your app may crash. Here's how we can wrap our function body to handle possible errors:
```js
async function oneAfterAnother() {
    try {
        const firstResult = await firstFunc();
        const secondResult = await secondFunc(firstResult);
 
        return secondResult;
    } catch(err) {
        // do something with the error here
    }
}
```
### __Further Reading__
*   [Callback Hell](http://callbackhell.com/)
*   [async function (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
*   [await operator (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   [ECMAScript 2017 (MDN)](https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/ECMAScript_Next_support_in_Mozilla#ECMAScript_2017)
*   [try...catch (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

#
## [Previous](./007_Cookies.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./009_Login_Logout.md)
#
##  [Index](../Index.md)