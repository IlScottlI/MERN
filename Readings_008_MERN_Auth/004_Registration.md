#   Registration
We will have users for our website. These users will need to be saved in a database, and we will be creating these users via a registration form. This registration form will make a call to our API in order to actually register the user in the database. The hashing of the password will be done at the Schema level, so we will not have to worry about that in our controller. All of the other validations will also happen at the Schema level.

### __user.controllers.js__
```js
...
register: (req, res) => {
  User.create(req.body)
    .then(user => {
        res.json({ msg: "success!", user: user });
    })
    .catch(err => res.json(err));
}
...
```
Let's look at what we are doing. On registration, we created a new user with the data passed from the request via `request.body`. Then, we tried to save it. If the save was successful, we sent back a success message, along with the user instance. If it was not, then we sent the error as a response.

After we register a user, we will likely want to log them in. So, let's look at the tools and technologies we will be using in order to log in a user.

#
## [Previous](./003_User_Model.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./005_Environment_Variables.md)
#
##  [Index](../Index.md)