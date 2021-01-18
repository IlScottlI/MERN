User Model and Bcrypt
By now we should be fairly familiar with mongoose, and it should be fairly easy for us to write a schema to store users in MongoDB. For the time being, let's go with `firstName`, `lastName`, `email` and `password`.
```js
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be 8 characters or longer"]
  }
}, {timestamps: true});
```
However there are a couple pieces that this doesn't quite cover.

1. Email Validation
   
We can add in a custom validator called `validate` into our schema in the same sort of way that we have `required` or `minlength` and we need to provide it an object that contains a `validator` function (something that will return true or false) and the message we want to display if the value is not valid. To validate emails in the past we've used Regex, and this would be a good approach once again.
```js
validate: {
  validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
  message: "Please enter a valid email"
}
```
2. Confirm Password
   
As our `UserSchema` doesn't contain a field for `confirmPassword` (and we really wouldn't want to save that to our database) we will need to add in a touch of code to allow us to compare `password` with it. We can make use of [mongoose virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html)—basically fields we don't want to save in MongoDB—to accomplish this. We will chain calls to `get` and `set` to the returned virtual object, allowing us to establish both a getter and a setter for the virtual field.
```js
// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );
```
Next we need to make use of some Middleware to add in another validation. Specifically we will be using the "pre hook" and having it run before validations.
```js
UserSchema.pre('validate', function(next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});
```
**Note:** avoid rewriting the callback function using an arrow function as it will not have the correct scope for `this`.

One common feature of Middleware is the "next" function. Essentially when our Middleware has finished whatever it needs to do, we need to call this to have the next Middleware or next function (in this case normal validations) run.

3. Bcrypt

We want to make sure that our passwords are not saved in actual text. Bcrypt is a very popular library for hashing passwords and easy for us to install as well. Using NPM we can install this with a simple `npm i bcrypt`.

Next we can make use of another "pre hook", this time before the User is saved into the database.
```js
// near the top is a good place to group our imports
const bcrypt = require('bcrypt');
// this should go after 
UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});
```
It's recommended to use Bcrypt in an asynchronous way so we will be using it with Promises. The "10" inside the `bcrypt.hash()` function refers to the number of salt rounds that Bcrypt will use when generating a [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)). For our purposes "10" will be a fine value here. As in our previous Middleware we will need to call the "next" function once the Promise is fulfilled.

#
## [Previous](./002_Authentication_Authorization.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./004_Registration.md)
#
##  [Index](../Index.md)