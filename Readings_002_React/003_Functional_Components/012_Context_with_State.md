# Context with State
Let's look at an example of context by passing state through it. In the previous lesson, we went over using Context by just passing in some static value. You may have thought that it was a little weird that we would set up context just to send one hard-coded value.

So, let's look at an example where we combine the `useState` hook with context. In our `App` component, let's add the following:
```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
 
import AppWrapperComponent from './AppWrapperComponent';
import NumContext from './context/NumContext';
 
function App() {
  const [val, setVal] = useState(1);
 
  return (
    <div className="App">
      <NumContext.Provider value={{val, setVal}}>
        <AppWrapperComponent>
        </AppWrapperComponent>
      </NumContext.Provider>
    </div>
  );
}
 
export default App;
```
Note that we gave the provider component a value attribute of an object containing both val and the setVal function. Now, in any child component, we have access to both the val, as well as the ability to call `setVal`. With this, you can now access and change state from higher than the parent (even all the way to the top, which would effectively be global state) without having to constantly pass down props through the component tree.

#
## [Previous](./011_Context_API.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./013_Render_Props.md)
#
##  [Index](../../Index.md)