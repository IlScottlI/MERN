# JavaScript Overview
## Why JS?
In many ways, JavaScript is the magic that brings the internet to life. Many of the most amazing new things we've seen on the web in the past 10 years are powered by JavaScript. Google Auto-complete, animations, dynamic transitions, single-page web applications, in-browser chat apps, loading screens, and drop down menus to name a select few. We almost take for granted how widespread JavaScript is. This is why we believe every developer should know at least some JavaScript!

Not only that, no matter what stack or language you decide to code in, you will have some interaction with JavaScript. It's part of the big three client technologies. Not only that, it's the most widely used language of the web world. When you code in JS, you code in a language that more web developers can understand than any other language. This is why we recommend doing Algorithms in JavaScript as well. It makes a good technical interview language because it's so widely understood!

## The Big Three

Often times, when referring to the core languages of the internet, we talk about 'the big three'. These three technologies are present in just about every application you encounter on the web. Let's recap:

*   __HTML__ represents the content and the structure. We can think of this as the skeleton of a webpage. Elements are first placed into the Document Object Model, or the DOM, so that data can be represented on the browser.
*   __CSS__ represents the style and positioning of our HTML elements. We can think of this as the skin and clothes, the visual side of our website. Things like color, font, sizing, and positioning are all controlled in part by CSS.
*   __JavaScript__ is the action. We can think of it as the behavior of our website. You can build beautiful static websites with HTML & CSS, but they're not actually functional until we add logic. JS allows us to interact with our HTML & CSS by dynamically manipulating the DOM.

## Features
__JavaScript is an interpreted language__. At runtime, an interpreter parses the JavaScript we wrote and turns it into machine code for the computer. This is contrary to a compiled language, which compiles our code into a machine language prior to runtime. The most common of all JavaScript interpreters are built into web browsers, with Chrome using the V8 Engine, and Firefox using SpiderMonkey. These interpreters each have their own specific rules for how JavaScript should run and it should be noted that not all interpreters have identical behavior!

__JavaScript is an event-driven programming language__. When we think of it as the layer of behavior between the UI and the back-end, this makes sense. Creating a `<button>` in HTML does not mean that button does anything! However, clicking that button is an event that JavaScript can listen for. JavaScript comes equipped with all manner of UI events, from hovering your mouse over a specific HTML element, to scrolling, to clicking, to submitting forms. Now consider that the HTTP request and response cycle is also based around user-driven events, you might notice how these technologies overlap and work together!

__JavaScript is run on a single thread__. Putting it simply, JavaScript runs one command at a time, never performing operations concurrently. This raises some interesting questions. If JavaScript only ever runs one command at a time, how does it listen for events? The answer is the event loop, a specialized queue that allows JavaScript to dynamically add new operations when the events happen, even if it is already performing operations. This is why JavaScript is sometimes (and perhaps erroneously) referred to as 'non-blocking'.

# ECMAScript & ES6
This next section is a primer on the background of JavaScript. By learning some of the history of the language, we can better understand the importance of ES6. As the primary front-end scripting language of the internet, JavaScript is a massive iceberg of information; not all of it is visible from the surface. We believe that understanding how the language came about will better your growth as a JS developer.

## What’s in a name?
This might come as a surprise, but JavaScript wasn’t always called JavaScript. Originally, it was called Mocha during development. After the first beta release, the name was changed to LiveScript. Not too long after, a certain browser vendor called Netscape decided to again rename the language to JavaScript, feeding off of the success of the popular language Java.

Fast forward a couple decades, and now even the name JavaScript doesn’t necessarily tell the whole story. In order for us to truly understand the JavaScript landscape, we’re going to need to understand how the language is standardized.

## Enter ECMAScript
Nowadays, JS is the de facto front end scripting language of the internet. It’s an incredibly widespread technology that has to work consistently across all the major browsers and interpreters. Due to this, JavaScript needed a formal process to further the language without alienating browser vendors, users, or developers. The end result is a sort of ‘master reference’ that the JS interpreters should be understanding JavaScript as. This is our standardization.

The ECMA, or European Computer Manufacturer’s Association, maintains the current up-to-date standardization of JavaScript. This standard is called ECMAScript. The name ECMAScript, sometimes shortened as ES, ended up being nothing more than a compromise amongst the different organizations involved in the specification process. Brendon Eich, the creator of JavaScript, has commented that “[it] was always an unwanted trade name that sounds like a skin disease.”

For us as developers, the takeaway is quite simple: ECMAScript is the standardization of JavaScript and JavaScript is the implementation of the ECMA Standard. Most of the JavaScript you’ve been exposed to is a version of the standard called ES5, standardized in 2009 and sometimes called ECMAScript 5.

## ES6 and Beyond
ES2015, or ES6, is the newest standard. It is a superset of ES5, meaning it contains all the features of ES5, plus all the new additions of ES6. This is a common theme for JavaScript standardizations, where new standards are often included as a superset of the old standard, rarely deprecating features.

## Takeaways
*   ES6 is a superset of ES5. Because ES6 is not a full language in itself, we must learn both.
*   The vast majority of existing JavaScript is still ES5, including libraries, legacy code bases, and examples you encounter on the web.
*   Many of ES6's most important features are syntactic sugar. Not necessarily needed, but they make the language sweeter to write.
*   JavaScript is the language, ECMAScript is the standard.
*   In the following chapters, we will be learning ES5 and ES6 in parallel, with the new ES6 features clearly marked.
