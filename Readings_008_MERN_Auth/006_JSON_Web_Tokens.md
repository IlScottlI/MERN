#   JSON Web Tokens
In order to keep track of who is logged in, we will be using JSON web tokens (JWTs). JWTs are a structured way to keep data secure and to make sure that data has not been tampered with along the request/response cycle.

##  JWT Structure
There are three parts to a JWT: the header, the body, and the signature. The header holds data about the JWT itself and the signature signs the JWT. The body is where we will actually store the information we want.

##  Creating a JWT
We will be using a third-party package called `jsonwebtoken` that we can use to create and sign these tokens.

First, within your project, run `npm install jsonwebtoken`.

Next, we can require it in our project via
```js
const jwt = require("jsonwebtoken");
```
When we create a new JSON web token, we will create an object that represents the payload. Generally, this will be the id of the user instance that was logged in. We will also need a secret key to make sure that our token has not been tampered with. So, assuming we have some user instance called `user`, the code will look like the following:
```js
const payload = {
  id: user._id
};
 
// notice that we're using the SECRET_KEY from our .env file
const userToken = jwt.sign(payload, process.env.SECRET_KEY);
```
Now, we have created a jwt that we can send with our responses. The way we will do this is with a cookie, and we will cover it in the next lesson.

### __Additional Resources__
[JSON Web Tokens](https://jwt.io/)

#
## [Previous](./005_Environment_Variables.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./007_Cookies.md)
#
##  [Index](../Index.md)