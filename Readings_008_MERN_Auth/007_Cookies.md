#   Cookies
HTTP cookies are a way that we can send information between the server and the client. They will be sent from the server, and then stored in the browser in some fashion. This information will be kept in the browser while the user is interacting with the website.

## Cookies and JWT
We will be saving our JWT that contains the user's id in a cookie. Although there is not any particularly sensitive information in the cookie, the JWT itself is sensitive. One does not necessarily need the information in the JWT; just the JWT itself. If the cookie is not properly guarded, it can be compromised via javascript, such as a cross site scripting attack. So, we will make sure these cookies are "HttpOnly". This means that the cookies are essentially invisible to client-side JavaScript and can only be read by the server.

## Cookies in Production
An important thing to remember is that there are many different types of attacks. One type of attack is a "man-in-the-middle" attack. In this type of attack, a hacker can get between, or "in the middle" of a request and grab the information. A way to make this more difficult is to make sure that the cookies are only sent during secure sessions, that is via "https". It is not very necessary to set this up during development and requires extra configuration. So, we will not be doing this for projects. However, in a production environment, you should make sure that the cookies are only able to be sent via "https". This can be done via a "secure" flag in our cookie.

## Cookies in Express
In order to use cookies in express, we will need to install an extra dependency: `cookie-parser`. Run `npm install cookie-parser`. Next, go to your `server.js` and include the following new lines of code:
```js
const cookieParser = require('cookie-parser');
...
app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
```
Now our app has the abilities to send and read cookies with each request/response.

In a given response, we can set a cookie via the following:
```js
res.cookie("mycookie", "mydata", { httpOnly: true }).json({
  message: "This response has a cookie"
});
```
This is how we can use cookies in our project.

On the front end, once the cookie is client side, we can send the cookie with every request. In the next lesson, let's look at how to login.

### __Additional Reading__
[Cookies (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

#
## [Previous](./006_JSON_Web_Tokens.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./008_async_await.md)
#
##  [Index](../Index.md)