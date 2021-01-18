<h1>Socket.io-client && React</h1>

With React, we need to install socket.io-client.
```
npm install socket.io-client
```
To use sockets in React, we need to add an import statement to the top of our component file.
```
import io from 'socket.io-client';
```
To initialize the socket, we need to invoke React's `useState` hook and pass a callback function which will invoke the imported `io` function like so: `io(":nodeServerPortNumberGoesRightHere")` . The reason we have to pass in a callback is that if we were to directly invoke the io function, it would be called every time the component rerenders, meaning that we would be creating a bunch of extra sockets. Additionally, we need to add our event listeners inside of a React `useEffect` callback to ensure that they only get added when the component loads.

A super quick and simple setup will look like this:
```js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
 
function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));
 
  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));
 
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);
 
  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}
 
export default App;
```
__Note:__ If your app is creating two socket connections every time you load the client side, it's probably related to the fact that create-react-app now wraps the App component in a React.StrictMode component to help detect issues in development. Unfortunately, this causes the lazy initial state callback to be fired twice. To prevent this, simply remove the wrapping component in index.js. See the following issue on GitHub: https://github.com/facebook/react/issues/15074

## __Further Reading:__

[Lazy Initial State](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state)

[Cleaning up an effect](https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect)

#
## [Previous](./002_Sockets_on_the_server.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./004_The_Handshake.md)
#
##  [Index](../Index.md)