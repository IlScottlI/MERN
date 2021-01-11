# useState

## Hooks
Hooks are now an extremely important part of React, and understanding them is important to your growth as a React developer. So, let's dig into them right away.

A hook, generally speaking, is just a function, either built-in or custom, that allows you to "hook" in or use a certain piece of functionality. So, let's say you have the following class component:
```jsx
import React, { Component } from 'react';
    
    
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }
 
    handleClick = () => this.setState({
        clickCount: this.state.clickCount + 1
    })
    
    render() {
        return (
            <div>
                { this.state.clickCount }
                <button onClick={ this.handleClick }>Click Me</button>
            </div>
        );
    }
}
    
export default Counter;
```
We have access to `this.state` and can change it via `setState`.


## Using useState


However, in a functional component, we do not have such abilities. 

Enter hooks. With hooks, we can define and set the state of a functional component. We will need the following import:
```jsx
import React, { useState } from 'react';
```
The hook, `useState` will be imported from `react`. Next, let's convert that class component to a functional component.
```jsx
import React, { useState } from 'react';
    
    
const Counter = props => {
    const [state, setState] = useState({
        clickCount: 0
    });
    
    return(
        <div>{ state.clickCount }</div>
    );
}
    
export default Counter;
```
We have just defined two variables: `state` and `setState` by calling the `useState` method. They will behave the same way that state behaves in a class component. We can access the current state via `state` and then change the state via `setState`. If we were to expand upon this example to include setting state:
```jsx
import React, { useState } from 'react';
    
    
const Counter = props => {
    const [state, setState] = useState({
        clickCount: 0
    });
 
    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }
 
    return (
        <div>
            { state.clickCount }
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
    
export default Counter;
```
Whenever we click the button, we are preventing the default behavior and then setting the state by incrementing the clickCount property. Now, we can use state within a functional component.



NOTE: When invoking `useState`, we do not need to pass in an object. We can just pass in a primitive value and then update it accordingly.

You will more commonly see useState implemented as in the following example:
```jsx
import React, { useState } from 'react';
    
    
const Counter = props => {
    const [count, setCount] = useState(0);
 
    const handleClick = () => {
        setCount(count + 1);
    }
 
    return (
        <div>
            { count }
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
    
export default Counter;
```