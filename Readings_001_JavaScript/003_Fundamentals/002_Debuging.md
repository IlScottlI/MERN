# Debugging JS
## Introduction
Sooner or later, your code is going to break, no matter how talented or experienced you are. This is why self sufficiency is so important. Building up our debugging skills is a lot easier than always writing 100% perfect error-free code on your first try! Luckily, JavaScript has a lot of tools to make it easier for us to hunt down our bugs. As we talked about before, JavaScript runs in two parts. First it gets parsed to make sure it's viable JavaScript, then the code is actually run. Typically, errors follow this same format. We have syntax errors and runtime errors.
## Syntax Errors
Consider the below code. What do we log to the console?

```JS
let x = 1;
let y = 2;
let z == 3;
console.log(x + x);
console.log(y - z);
console.log(z * x);
```

Trick question! This is one of the most common types of syntax errors: Unexpected token. If you look closely at z, we have a double equal sign. The parser threw an Unexpected token error because == is simply not expected after let z.

__Syntax Errors__ happen when the parser finds invalid JavaScript. The moment an error is found, the parser terminates and the program ends without any code ever being run. In the above example, the console.logs never fired because the syntax error killed our app before it even started!

Syntax errors show the line the parser errored on. This means your issue happened somewhere before that line and not necessarily that specific line. You should trace your syntax errors backwards starting on the line it errored.

## Runtime Errors
A runtime error is what happens if your code successfully parses and the error happens while the program is running. Typically, we just call these __bugs__. Examples of runtime errors could be faulty logic or improperly written code. You wrote a set of instructions and the output is wrong.

When your code doesn't behave in the way you expected, there are many techniques to finding the root of the problem. Ask yourself, what was the most recent line of code you added before your program started to fail? How many lines of code did you write between tests? If it was anywhere above six or seven lines, you might be coding too much and running your code too little. Sometimes you need to go back to the very start and ask what seems like very basic questions, such as, "What are the steps needed to do what I want to do?"

At the end of the day, remember: 100% of all bugs you encounter were created by a developer. Creating bugs doesn't make you a bad developer, it makes you a developer!

## Recap
*   When debugging your JS, always confirm that you have no syntax errors first. Your code will not run until those syntax errors are fixed.
*   When hunting syntax errors, typically the actual problem is before the line that errored. Work backwards from there.
*   Console.log everything! Often times the biggest errors come from faulty assumptions. That variable you thought was a string was actually an array of strings, which can completely change your logic.
*   Run your code early and often, especially at first. If you're writing 20 or 30 lines of JavaScript at a time before seeing if any of it works, you're coding too much! The stronger you get with JS, the more assumptions you can make, but at first assume nothing!
#
## [Previous](./001_Javascritp_Overview.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./003_Scope.md)

#
##  [Index](../../Index.md)