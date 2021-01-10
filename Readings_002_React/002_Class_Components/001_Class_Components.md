## Class Components 

## <h3> _Note:_ The components are stored in a folder ```Project_Folder/src/components```  </h3>

#
_Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen._

A React component is simply defined by a function that returns a React Element. Since the beginning, we've been writing functional components. But we can also write an ES6 Class that will return a React Element as well.

## Class Component
When creating a Class Component there are a couple things we have to do in order for it to be a valid component. Each class must:

1.  Have a name starting with a capital letter.
2.  Extend React.Component.
3.  Have a render() method that returns a React Element either by JSX or React.createElement(). Below, we are using JSX.
   
### SomeClassComponent.js

```jsx
import React, { Component } from 'react';
    
class SomeClassComponent extends Component {
    render() {
        return <div>This is our first class component.</div>;
    }
}
    
export default SomeClassComponent;
```