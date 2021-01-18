#   Login/Logout
When logging in to our project, the steps are as follows:

1.  Have a user input information in a form.
2.  Once the form is submitted, we will send a request to our server with the information.
3.  On the server-side, we will need to check and make sure that the user's credentials are correct.
4.  If they are, we will create a JWT and send it back in the form of a cookie.
In code, it will look like this:
```js
login: async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
 
    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }
 
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
 
    if(!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }
 
    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
 
    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, secret, {
            httpOnly: true
        })
        .json({ msg: "success!" });
}
```
We will try and see if the user exists via the `User.findOne`. If the user does exist, we will use `bcrypt` to compare the hashed password in the database to the plaintext one supplied. If they match, then we can create a jwt and send it in a cookie.

### __Updating Register Method__
We can now update the register method with some additional logic. Once the user is successfully registered, we can log them in immediately as an added convenience.
```js
...
register: (req, res) => {
  User.create(req.body)
    .then(user => {
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
 
        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!", user: user });
    })
    .catch(err => res.json(err));
}
...
```
### __Logout__
Logging out is as simple as clearing the usertoken cookie. See the following example:
```js
...
logout: (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}
...
```

#
## [Previous](./008_async_await.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./010_Middleware.md)
#
##  [Index](../Index.md)