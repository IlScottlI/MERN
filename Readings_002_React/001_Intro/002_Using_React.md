#   Using React
React works by using objects called components. These components can be created in a variety of ways, but the general idea is to break down your DOM into a variety of components that have specific behaviors. For example, if we have a form on our page, we may create a component just for that form. Then, we can have a separate component just for the navbar, and so on.

If we want to use React within our html (we will interact with React a little differently in the next section), we need to include the React scripts in our html.
```html
<script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
``` 
With React, we can make a basic component using `React.createElement`. `React.createElement` has three main parameters. First, we need to tell React what kind of element we want to create, let's say an `h1` tag. Next, we can pass in props. We will explore this concept in more depth later, but for the time being let's just pass in an empty object, via `{}`. Lastly, we will tell `React.createElement` the children we want to include. That is, we need to tell React the items we want within our `h1` tag. This could be a string, such as "I am creating my first React component". Or, we could nest another component via another `React.createElement` function call. An example would be as follows:
```jsx
const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")
```
That is it! If we wanted to create a nested React Component, we could do something like this:
```jsx
const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))
```
This is great and all, but how can we actually use this in html? We will need to create an html page and tell React that we want to display the components in the DOM. We will do this when we create our first React component in the following lesson.
#
## [Previous](./001_Intro.md) <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./003_First_React.md)
#
##  [Index](../../Index.md)