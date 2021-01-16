# Custom Hooks
While React gives us a number of useful built-in hooks, the real boon of hooks is that we have the ability to create our own custom hooks. Custom hooks allow us to take component logic that is used in multiple places and extract it for reuse. That way, we don't need to keep rewriting functionality; this is an excellent way to keep things DRY (Don't Repeat Yourself). Say, for instance we were going to use lists in multiple places in our app, but the UI itself will vary. Assume we would want a list of strings, a way to add to the list, and a way to remove from the list by index. Let's start out by creating a custom hook.
```jsx
// useList.js
import { useState } from 'react';
 
export default (initialList = []) => {
    const [list, setList] = useState(initialList);
 
    function add(str) {
        setList([...list, str]);
    }
 
    function remove(index) {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]);
    }
 
    return {
        list,
        add,
        remove
    };
}
```
Notice that we didn't have to import React itself here since we're not rendering any JSX. Creating our list state should look familiar by now. Inside the add function, we're using the spread operator to clone all the existing list elements, and then dropping the new item at the end of the list. Inside the remove function, we're spreading the front half before the index and the last half after the index into a new array. Finally, we return an object with the list along with the add and remove functions.

When we want to use our custom hook, we can import it and invoke it inside a component. For instance, let's say we want to create a new component which starts with an initial list. Here's our example code:
```jsx
import React, { useState } from 'react';
 
import useList from './useList';
 
export default () => {
    const [val, setVal] = useState('');
    const { list, add } = useList(['first', 'second']);
 
    function handleSubmit() {
        add(val);
        setVal('');
    }
 
    return (
        <>
            {list.map((item, i) => <p key={i}>{item}</p>}
            <input
                onChange={e => setVal(e.target.value)}
                value={val}
            />
            <button onClick={handleSubmit}>Add</button>
        </>
    );
} 
```   
The only state we need to be concerned about here is the value of the input. Otherwise, all the list state is being handled by the custom useList hook. Although we're not using the remove function in this example, we could have just as easily destructured it if needed when we invoked the hook. What's really awesome about this is that we can have multiple lists throughout our app using this hook and they won't collide with each other in any way!

## Additional Reading
## [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

#
## [Previous](./013_Render_Props.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./../004_APIs/001_About_Promises.md)
#
##  [Index](../../Index.md)