# Ternary Operator
The [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) has a solid definition of what a ternary operator is:

_The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition is __truthy__ followed by a colon (`:`), and finally the expression to execute if the condition is __falsy__. This operator is frequently used as a shortcut for the `if` statement._
Essentially, a ternary operator is a short version of an if statement. Let's go over the difference between the two with a couple basic examples:

Let's say I want to create a function to determine `if` I can or cannot afford an item:

## Basic `if` statement
```js
let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance) {
        return `Cannot afford! You are $${itemPrice - accountBalance} short`;
    } else {
        return "Can afford!";
    }
}
``` 
## Ternary statement
```js
let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
        ? `Cannot afford! You are $${itemPrice - accountBalance} short`;
        : return "Can afford!";
    // is the itemPrice > accountBalance
    //  yes? then return "Cannot afford"
    //  no then return "Can afford"
}
``` 
If we invoke either of these functions, they will return the same exact result. The only difference is the ternary statement is shorter.
```js
let myBankAcountBalance = 1000;
const drone = 1001;

let droneOnSale = drone - drone * 0.03;

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));
```
## Special Note
Take care when nesting ternary statements, as they can tend to become unwieldy and unreadable. For instance, consider the following:
```js
const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false
```
Imagine coming back to read that code after 6 months...
#
## [Previous](./009_Convert_to_Arrow.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./../004_OOP/001_Overview.md)
#
##  [Index](../../Index.md)