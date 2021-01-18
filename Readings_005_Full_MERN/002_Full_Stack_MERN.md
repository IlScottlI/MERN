#   Full Stack MERN

Let's jump right into creating our full stack MERN project. First, create a new folder called "myNewProject" and `cd` into it.
```js
mkdir myNewProject
cd myNewProject
```
Next, create a new project via:
```js
npm init -y
```
This will create the package.json for our server. We will then need to install our dependencies:
```js
npm install express
npm install mongoose
```
Next, via the terminal or the UI, create a new file called server.js.
```js
Mac: touch server.js
Windows: copy nul server.js
```
Then, within the server.js add the following code:
```js
const express = require('express');
const app = express();
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
```
Let's create our modularized project structure by making a folder called "server" and then create four more folders within that called "config", "controllers", "models" and "routes".

This is how we create the project structure for our backend. Now, let's create our React project via `create-react-app`. Since React is used for the client side code, we can call our project "client". Make sure you are in the same folder level as your "server.js".
```js
npx create-react-app client
```
Now that you have your React project built, you will be running two different servers: your front end React server with live reloading and your Express server.


#
## [Previous](./001_Intro.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./003_Hello_World.md)
#
##  [Index](../Index.md)