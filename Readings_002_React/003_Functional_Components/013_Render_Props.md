# Render Props
A big advantage of the React architecture is the idea of creating reusable components to build an application. In previous years, a common architectural pattern developers used was to separate components into "smart," or stateful components, and "presentational" components, which merely added a presentation layer and didn't hold their own state. More recently, a pattern called Render Props has emerged to help separate concerns (logic vs. presentation). Let's take a look at how we can leverage the Render Props pattern to create a flexible and reusable Counter component.
```jsx
// Counter.js
import React, { useState } from 'react';
 
export default ({ initialValue = 0, render }) => {
    const [count, setCount] = useState(initialValue);
 
    function increment() {
        setCount(count + 1);
    }
 
    function decrement() {
        setCount(count - 1);
    }
 
    return render({ count, increment, decrement });
}
```
Notice that our Counter component is expecting to be passed a render function and, optionally, an initial value. We have set a default initial value of 0 in the event that the calling code does not provide this prop. Inside the Counter component, we establish an increment and a decrement function. We return the result of calling the passed-in render function with an object that contains the count along with the increment and decrement functions. Now, we can create two other components which use the Counter functionality, but render in completely different ways!
```jsx
// FirstCounter.js
import React from 'react';
 
import Counter from './Counter';
 
export default () => (
    <Counter
        initialValue={5}
        render={({ count, increment }) => (
            <>
                <h2>The count is currently {count}!</h2>
                <button onClick={increment}>Add One</button>
            </>
        )}
    />
)
```
```jsx
// SecondCounter.js
import React from 'react';
 
import Counter from './Counter';
 
export default () => (
    <Counter
        initialValue={10}
        render={({ count, increment, decrement }) => (
            <>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <p>Current Count: {count}</p>
            </>
        )}
    />
)
```
Note the use of empty angle brackets inside the render functions. This is to avoid having to add additional elements (typically divs) to the DOM, as React requires that each piece of JSX have a single root. What's nice about the Render Props pattern is it encourages code reuse; we didn't have to recreate the count and increment/decrement functionality inside our two components, but instead used what we had already built inside the Counter component.

Additional Reading:

## [Render Props (React docs)](https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns)

#
## [Previous](./012_Context_with_State.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./014_Custom_Hooks.md)
#
##  [Index](../../Index.md)