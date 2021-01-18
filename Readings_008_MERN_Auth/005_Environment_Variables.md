#   Environment Variables
Often, in our projects, we'll have certain constant values which are needed for things such as interacting with APIs, authenticating users, etc. It's tempting to just put these values directly in the code. This may work for personal projects which will never be shared, but it's better to get into the habit of separating these values, or environment variables, from the code itself. Also, the values may change depending on whether the app is being run in development, production, or another environment.

There are various ways to incorporate environment variables in our projects. One way is to directly declare them in the command line when running the project. Here's how that would look:
```
SECRET_KEY="my very secret key" node server.js
```
This tends to get a bit cumbersome in development. Another option is to install a library which enables a file-based. Run the following command in the server folder of your project:
```
npm install dotenv
```
With dotenv installed, you can create a hidden .env file in the same folder as your server.js file. __Important__: do not commit this if your project is a repository. You can avoid committing it by adding the string .env to a .gitignore file.

### __.gitignore__
```
.env
```
We don't want people seeing our secret project values if they see the code in the wild! Here is the format for a .env file:
```
FIRST_SECRET_KEY="first key value"
SECOND_SECRET_KEY="second key value"
```
Then, in your server.js file, you need to require the dotenv library and invoke its config function.

### __server.js__
```js
require('dotenv').config();
```
Once you have invoked this function, later in your code, you can retrieve the values from the process.env object, as in the following.
```js
const myFirstSecret = process.env.FIRST_SECRET_KEY;
```
### __Additional Reading__
[dotenv docs](https://www.npmjs.com/package/dotenv)

#
## [Previous](./004_Registration.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./006_JSON_Web_Tokens.md)
#
##  [Index](../Index.md)