#   Express + Mongoose
###  __Learning Objectives:__
*   Learning what Mongoose is
*   Learning how to Install mongoose with npm
*   Learning how to connect mongoose to a database
*   Learning how to create a Mongoose Schema and Model
*   Learning how to execute basic queries with Mongoose objects
*   Understanding the basic syntax for writing promises with Mongoose methods
## Mongoose
Now that we understand our MongoDB basics, let's connect it to a project and see it in action. The most popular way of using MongoDB with Node and Express is with a library called __Mongoose__.  Mongoose simplifies making MongoDB queries with its own library of methods.  This means that we can connect mongoose directly to a MongoDB database and it will allow us to give more structure to our data with the addition of models and schemas.

Mongoose will act as a layer between our application and our database enabling us to do things like validate and run complex queries more effectively.

### __1. Installing Mongoose__
Download the [HelloMongoose](https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/HelloMongoose.zip) boilerplate code and open in vs-code. Open a new terminal window and navigate to the HelloMongoose project folder and install the dependencies by running:
```cmd
npm init -y
npm install mongoose express
```
### __2. Require Mongoose__
```js
const mongoose = require('mongoose');
```
### __3. Connecting to MongoDB with Mongoose__
In vs-code, navigate to the config folder where you will find the `mongoose.config.js` file where we use mongoose to connect to MongoDb. Mongoose has a super convenient connect method -- `mongoose.connect`!

```js
mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Established a connection to a database'))
  .catch(err => console.log('Something went wrong connecting to the database ', err));
```

Note: The useNewUrlParser and useUnifiedTopology are options we pass to get rid of deprecation messages in our terminal.

__Note: If you connect to a database that doesn't exist, Mongoose will create the DB for you as soon as you create your first document!__

### __4. Create your Mongoose Schema and Model__
Mongoose provides more structure to MongoDB by adding schemas that we can create that turn into models for our collections. These models specify keys, types, and even validations for documents in a specific collection. Mongoose also handles appropriate naming for us when it communicates with MongoDB!



In vs-code, navigate your way to the user.model.js file in the models folder where we create a User collection using mongoose. Once again, we need to import mongoose using the require statement at the top of the file.



```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    age: Numner
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
```


Let's break it down. The __mongoose.model()__ method is the most important in this case. Its job is to take a blueprint object and, in turn, create the necessary database collection out of the model. We get this blueprint by making a new schema instance from the __mongoose.Schema()__ object constructor.  Notice how the mongoose.Schema() method takes an object as its parameter?  The structure of that object is how each new document put into the collection will be formatted. You can learn more about the other Schema Types [here](http://mongoosejs.com/docs/schematypes.html). We then create a User variable to export and set it to be the value of mongoose.model which will effectively export a constructor function to create new user objects. Exporting the User variable will allow us to import and use the User constructor function in any file we choose.

### __5. Use the Mongoose Models to Create / Retrieve / Update / Destroy__
Navigate your way into the controllers folder where we will find the `user.controller.js` file that will house all of our logic for creating, retrieving, updating, and deleting users. Notice at the top of the file, we do not have a `require("mongoose")` statement. Instead we have a `require("../models/user.model")` statement which is importing the User variable that we exported from the `user.model.js` file. In our controller file, we export different functions that perform the basic CRUD operations using our User model.


```js
const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allDaUsers => res.json({ users: allDaUsers}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.prams.id })
    .then(oneSingleUser => res.json({ users: oneSingleUser}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => res.json({ users: newlyCreatedUser}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.prams.id }, req.body, { new: true })
        .then(updatedUser => res.json({ users: updatedUser}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.prams.id })
        .then(result => res.json({ result: result}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
```



A couple key points:

*   User is a constructor function which can create new user objects and also has other methods that will talk to the database!
    *   the .then() will only execute upon successfully inserting data in the database
    *   the .catch() will execute only if there is an error.


###  __6. Routing__
Navigate your way into the routes folder where we will find the `user.routes.js` file that will be responsible for all of our routes dealing with the user model. Notice at the top of the file, this time, we have a `require("../controllers/user.controller")` statement which is importing everything we exported from the controller file.


```js
const UserController = require("../controllers/user.controller");

module.exports = app => {
    app.get("/api/users/", UserController.findAllUsers);
    app.get("/api/users/:id", UserController.findOneSingleUser);
    app.put("/api/users/update/:id", UserController.updateExistingUser);
    app.post("/api/users/new", UserController.createUser);
    app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
}
```


### __7. Server__
Last but not least is our server.js file. Because we modularized our files from the start, this allows our `server.js` file to contain only a few lines of code, allows us to be able to easily expand our app, and helps us keep organized. Take a moment and look over the `server.js` file and familiarize yourself with what's happening.



There is a lot that is happening in the code above so take a couple minutes to review and make sure that you understand everything that is going on. When you feel comfortable to move on, you can go ahead and run your server using Nodemon in your terminal:
```cmd
nodemon server.js
```

### __Debug__
If it didn't work make sure the following things are done:

1.  &nbsp;Make sure your MongoDB server is running (the 'mongod' command)
2.  &nbsp;Make sure your post data matches the data that you are inserting into the database (name and age
3.  &nbsp;Make sure that your form submits a post request to '/users'
4.  &nbsp;Make sure mongoose is actually installed
5.  &nbsp;Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
6.  &nbsp;Use lots of console.log statements and follow the flow of data.
7.  #
## [Previous](./006_Operators.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./008_Common_Mongoose_Commands.md)
#
##  [Index](../../Index.md)