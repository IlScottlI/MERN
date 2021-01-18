<h1>Socket.io && Node</h1>
With Node.js, there is a package called Socket.io. Socket.io utilizes everything in the Web Sockets API and then adds some additional features on top of that. This makes things simple enough for us because we already use Node.js for our back end, we can simply use socket.io without any issues. Socket.io is an install-able npm package that we install using the same installation method we use to install express and/or mongoose:

```
npm install socket.io
```
In order to use socket.io, we need to pass it an instance of our server. To do that, we just need to pass our server variable like this:

```js
const express = require("express");
const app = express();

const server = app.listen(8000, () => 
    console.log("The server is all fired up on port 8000")
);

// To initialize the socket, we need to
// pass invoke a new instance of socket.io
// and pass it our express server
const io = require("socket.io")(server);
```
in our server.js file


Once initialized, we can now set event listeners and event emitters to help pass data along between the server and client. There is one event listener, named "connection", that is required that we must have before we can create our own event listeners. Here is what that looks like:

```js
io.on("connection", socket => {
    // NOTE: Each client that connects gets their own socket id!
    cpnsole.log(socket.id);
    // if this is logged in our node terminal, that means a new client
    // has successfully completed the Handshake!

    // we add all of our additional event listeners
    // right inside this function.
    // NOTE "connection" is a BUILT IN event listeners.
})
```

in our server.js file


At this point, inside the function we can now use the `socket` to create event listeners and emitters like so:

```js
io.on("connection", socket => {
    socket.on("event_from_client", data => {
        // socket.brodcast will emit to all other clients besides the
        // client who is actually emitting
        socket.brodcast.emit("send_data_to_all_other_clients", data);
    });
});
```

`socket.on` will listen for an event from the client. It takes a callback function that contains the data from the client. We then send that data straight to all the other clients.

### __Emitting Events from the Server__
With sockets, the individual clients don't communicate directly with one another; instead all communications must pass through the server. There are multiple ways for the server to emit events to connected clients, depending on which clients you intend to reach. They are all functions and all three take in two arguments: 1) the event name, and 2) optionally any data you want to send along with the event.

*   `io.emit` emits an event to __all connected clients__
*   `socket.broadcast.emit` emits an event to __all clients other than this particular one__, referenced by the socket variable
*   `socket.emit` emits an event directly to __this specific client__

#
## [Previous](./001_Web_Sockets.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./003_Sockets_on_the_client.md)
#
##  [Index](../Index.md)