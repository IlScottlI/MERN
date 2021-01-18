#   Full Stack Hello World

Now that we have the basic set up, let's create the rest of our project in the form of a "Hello World" full stack MERN application. Let's add a controller within the 'controllers' folder, called `person.controller.js`.

### __controllers/person.controller.js__
```js
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}
```
Next, in the routes folder, let's create the `person.routes.js` file.

### __routes/person.routes.js__
```js
const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
}
```
Now, we have a route that ends in 'api' and will simply return an object with a message equal to "Hello World". Let's link to this in our server.js:

### __server.js__
```js
const express = require('express');
const app = express();
require('./server/routes/person.routes')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
```
Now, when we visit 'localhost:8000/api', we will get a JSON response of `{message: "Hello World"}`.

We have our back end set up, but let's display this in our front end.

#

Let's now start setting up our React project. Change directories into your React project, called client, and run the following:
```js
npm install axios
```
We are installing axios so we can easily make a request to our backend. Within the `src` folder, create a new file called `Main.js`. In the `Main.js` file, we will make an api call and display our message. We will be using the `useEffect` hook in order to make the api call and save the message in state.
### __client/src/Main.js__
```js
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
}
```
We are setting the default message as "Loading...". Next, in your `App.js` file, you will need to insert the `Main` component as follows:
```js
import React from 'react';
import Main from './Main';
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
export default App;
```
At this point, you can start your server via `nodemon server.js` and your React app via `npm run start` in two different consoles. Once you have them both running, you should be able to visit 'localhost:3000'. Once you visit it, you will end up just seeing "Loading..." as your message. Why is that? This is because we are making a request to our server from a different origin. So, let's stop your express server and install an extra package within your server.

### __Cors__
```
npm install cors
```
This will install the ability to make cross-origin requests. Now, we will need to change our server.js as the following:

### __server.js__
```js
const express = require('express');
const cors = require('cors') // This is new
const app = express();
app.use(cors()) // This is new
require('./server/routes/person.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
```
Now we are able to make cross-origin requests in our project. When you refresh your React app, you should briefly see "Loading..." as the message, which will then be replaced by "Hello World". Congratulations! You have made your first MERN app. Next, we will start tying in our database.
#
## [Previous](./002_Full_Stack_MERN.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./004_Create_(Part_I).md)
#
##  [Index](../Index.md)