# Authorization and Middleware
By now we've used a bit of Middleware, and it's finally time for us to write our own.

Let's add in a new file in our config folder and call it `jwt.config.js`.
```js
const jwt = require("jsonwebtoken");
 
module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
    if (err) { 
      res.status(401).json({verified: false});
    } else {
      next();
    }
  });
}
```
The "authenticate" function takes a few arguments, the request and response that we are familiar with, but it also takes the "next" function we've seen a few times already. The function then checks the "usertoken" cookie that should be present inside of the "cookies" object of request with the secret we used when signing it. We then add in a callback function that receives errors and a payload (the information stored in the cookie). If there are errors, we can reply with a 401 [status code](https://http.cat/) and pass back an object signifying the user attempting to access the route is not authenticated.

<img src="./000_Captions/Screenshot%202021-01-18%20064406.png">

This Middleware function can then neatly sit in the middle of the url portion of the `app.get()` and the controller method.
```js
// inside of user.routes.js
const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  // this route now has to be authenticated
  app.get("/api/users", authenticate, Users.getAll);
}
```
Now in order for a user to access the "/api/users" route, they have to first login or register on the site.



__IMPORTANT: NOW THAT WE ARE USING COOKIES FOR AUTHENTICATION AND AUTHORIZATION, WE WILL MAKE SURE EACH REQUEST IS SENT WITH__ `{ withCredentials: true }` __. THIS WILL SEND THE COOKIES WITH EACH REQUEST SO OUR MIDDLEWARE WILL VERIFY WHO IS LOGGED IN.__

#
## [Previous](./009_Login_Logout.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./../Readings_009_MERN_Deploment/001_Deployment.md)
#
##  [Index](../Index.md)