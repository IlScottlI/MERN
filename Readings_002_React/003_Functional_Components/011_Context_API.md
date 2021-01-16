# Context API 
One of the more frustrating things about React is this idea of passing down props through components. As your project gets larger and larger, it becomes much more tedious to do this. You can imagine if you have some prop like a Theme, you would need to pass it down through the component tree to every component that needs the Theme. That means that if a parent component does not directly need a prop, but a child component needs it, you will have to pass the prop all the way down, almost like a handoff through each component. This is where context comes in.

## What is Context?
The Context API is built in with React, and it allows us to manage the "Global state" of a React application. Context works by creating one location where we can hold data for our application. Then, wherever we are in our application, we can directly access the data in context.

# Creating Context
Before we can do anything, first we need to create a context object.
```jsx
import { createContext } from 'react';
...
const MyContext = createContext();
```
This will create an object, called `MyContext` that we can use to share information throughout our application. There is an option to add default context by passing it in as an argument to the `createContext` method, but we will not do that for the time being.

## `Context.Provider`
The Context Provider is how we provide the information from our context to child components within our component tree.

In order to provide the context to components further down in our component tree, we will need to import our context object and then wrap the Provider around the children components. We could even add our `Context.Provider` in our `App.js` file.
```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppWrapperComponent from './AppWrapperComponent';
import MyContext from './context/MyContext';
function App() {
  return (
    <div className="App">
      <MyContext.Provider value={"context value"}>
        <AppWrapperComponent>
        </AppWrapperComponent>
      </MyContext.Provider>
    </div>
  );
}
export default App;
```
Now, every component within `AppWrapperComponent` will be able to access the value in our context.

## `useContext`
The `useContext` hook is a way that we can actually access our context in other components. Let's say that deep within our `AppWrapperComponent`, called `GreatGreatGreatGrandchildComponent`, which is deeply buried in our application. In that component, we can use `useContext` to access context.

The code looks like this:
```jsx
import React, { useContext } from 'react';
import MyContext from './context/MyContext';
const GreatGreatGreatGrandchildComponent = (props) =>{
    const context = useContext(MyContext);
    return(
      <div>
        hello {context}
      </div>
    )
}
export default GreatGreatGreatGrandchildComponent;
```
For more information regarding Context: https://reactjs.org/docs/context.html

#
## [Previous](./010_Other_Input_Types.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./)
#
##  [Index](../../Index.md)