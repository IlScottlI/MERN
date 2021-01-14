# useRef
React gives us a developer-friendly way to declaratively describe our UI (user interface); that is, we can simply lay our JSX out and let React worry about the implementation details of turning it into actual HTML. Under the hood, React uses something called a Virtual DOM, and through a process of comparing this Virtual DOM to the actual DOM (Document Object Model), also known as "diffing," it makes decisions as to when to re-render certain parts of our apps. Sometimes, we may need to imperatively control how a user's browser interacts with our UI. For this, React provides a ref attribute that we can give elements in order to hold on to a reference to that specific DOM node (element). We also have access to a hook (more on these later) called useRef that allows us to create a reference inside our component. Say, for example, we want to have a button which, when clicked, causes the browser to focus a specific input. Here's how we could do it by combining the useRef hook with the ref attribute.
```jsx
import React, { useRef } from 'react';
 
export default () => {
    const input = useRef();
 
    function focusInput() {
        input.current.focus();
    }
 
    return (
        <>
            <input ref={input}/>
            <button onClick={focusInput}>Focus Me!</button>
        </>
    );
}
```
Note that you have to access the ref's current property to get its actual value (DOM element in this case). There are other scenarios in which you might need a reference to a DOM element. For example, consider a graphical application in which you need to create a canvas element. It's important to obtain a reference to the canvas itself in order to draw certain objects on it. Here's some example code:
```jsx
import React, { useRef, useState } from 'react';
 
export default () => {
    const canvas = useRef();
    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);
    const [color, setColor] = useState('black');
 
    function drawSquare(color, x, y) {
        const ctx = canvas.current.getContext('2d');
 
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 100, 100);
    }
 
    return (
        <>
            <canvas ref={canvas} height="400" width="400"/>
            <div>
                <label>X Coordinate</label>
                <input
                    type="number"
                    min="0"
                    max="200"
                    onChange={e => setXVal(+e.target.value)}
                    value={xVal}
                />
            </div>
            <div>
                <label>Y Coordinate</label>
                <input
                    type="number"
                    min="0"
                    max="200"
                    onChange={e => setYVal(+e.target.value)}
                    value={yVal}
                />
            </div>
            <select
                onChange={e => setColor(e.target.value)}
                value={color}
            >
                <option value="black">black</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
            </select>
            <div>
                <button onClick={() => drawSquare(color, xVal, yVal)}>Draw!</button>
            </div>
        </>
    );
}
```
Note the use of useState, which is another built-in hook; we'll cover it thoroughly in the next chapter. You might also need to obtain a reference to a DOM node if you're integrating with an outside library that needs to control a specific piece of the DOM.
## Other Uses
Finally, the useRef hook can be used to hold on to a value which would otherwise become "stale" when accessed from another hook. Don't worry too much about this use case; just know that if you're accessing a stateful value and it's giving you an old value, you may want to look into useRef to create a mutable (changeable) object as a workaround.

### Further Reading:
[https://reactjs.org/docs/reconciliation.html](https://reactjs.org/docs/reconciliation.html)
#
## [Previous](./008_CSS_in_JS.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./../003_Functional_Components/001_Functional_vs_Class_Components.md)
#
##  [Index](../../Index.md)