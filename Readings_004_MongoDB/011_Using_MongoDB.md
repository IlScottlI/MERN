# Using MongoDB

### __Create a database called 'my_first_db'.__
```js
use my_first_db
``` 
### __Create students collection.__
 Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})<br>
 Create 5 students with the appropriate info.
```js
db.students.insertOne( {
        "name": "Scott Johnson",
        "home_state": "WV",
        "lucky_number": 23,
        "birthday": {
            "month": 10,
            "day": 23,
            "year": 1984
        }
    } )
```
 ```js
 db.students.insertOne({
        "name": "Jason Jade",
        "home_state": "FL",
        "lucky_number": 2,
        "birthday": {
            "month": 1,
            "day": 3,
            "year": 2004
        }
    })
 ```
 ```js
 db.students.insertOne({
        "name": "Alysson Aufderhar",
        "home_state": "MI",
        "lucky_number": 7,
        "birthday": {
            "month": 9,
            "day": 11,
            "year": 2001
        }
    })
 ```
  ```js
 db.students.insertOne({
        "name": "Jewell Greenholt",
        "home_state": "AL",
        "lucky_number": 1,
        "birthday": {
            "month": 3,
            "day": 31,
            "year": 2005
        }
    })
 ```
  ```js
 db.students.insertOne({
        "name": "Maudie Rowe",
        "home_state": "DE",
        "lucky_number": 10,
        "birthday": {
            "month": 7,
            "day": 1,
            "year": 1996
        }
    })
 ```
 Get all students.
 ```js
 db.students.find()
 ```
 Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
  ```js
db.students.find({home_state:"CA"})
 ```
 Get all students whose lucky number is greater than 3
  ```js
 db.students.find({lucky_number: {$gt:3}})
 ```
 Get all students whose lucky number is less than or equal to 10
  ```js
db.students.find({lucky_number: {$lte:10}})
 ```
 Get all students whose lucky number is between 1 and 9 (inclusive)
  ```js
db.students.find({lucky_number: {$lte:9,$gte:1}})
 ```
 Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
  ```js
db.students.updateMany({}, {$set: {interests: ['coding','brunch','MongoDB']}})
 ```
 Add some unique interests for each particular student into each of their interest arrays.
  ```js
  var bulk = db.students.initializeUnorderedBulkOp();
  db.students.update({name:'Scott Johnson'}, {$addToSet: {interests: 'VueJS'}});
  db.students.update({name:'Jason Jade'}, {$addToSet: {interests: 'NodeJS'}});
  db.students.update({name:'Alysson Aufderhar'}, {$addToSet: {interests: 'Express'}});
  db.students.update({name:'Jewell Greenholt'}, {$addToSet: {interests: 'PHP'}});
  db.students.update({name:'Maudie Rowe'}, {$addToSet: {interests: 'JavaScript'}});
  bulk.execute();
 ```
 Add the interest 'taxes' into someone's interest array.
  ```js
 db.students.update({name:'Scott Johnson'}, {$addToSet: {interests: 'taxes'}})
 ```
 Remove the 'taxes' interest you just added.
  ```js
db.students.update({name:'Scott Johnson'}, {$pull: {interests: 'taxes'}})  
 ```
 Remove all students who are from California.
  ```js
db.students.remove({home_state: 'CA'})
 ```
 Remove a student by name.
  ```js
db.students.remove({name: 'Scott Johnson'})
 ```
 Remove a student whose lucky number is greater than 5 (JUST ONE)
  ```js
db.students.remove({lucky_number:{$gt:5}}, true)
 ```
 Add a field to each student collection called 'number_of_belts' and set it to 0.
  ```js
db.students.updateMany({}, {$set: {number_of_belts: 0}})
 ```
 Increment this field by 1 for all students in Washington (Seattle Dojo).
  ```js
db.students.updateMany({home_state: "WA"}, {$inc: {number_of_belts: 1}})
 ```
 Rename the 'number_of_belts' field to 'belts_earned'
  ```js
 db.students.updateMany({}, {$rename: {number_of_belts: 'belts_earned'}})
 ```
 Remove the 'lucky_number' field.
  ```js
 db.students.updateMany({}, {$unset: {lucky_number: ''}})   
 ```
 Add a 'updated_on' field, and set the value as the current date.
  ```js
db.students.updateMany({}, {$set: { updated_on: new Date() }},{ upsert: true })
 ```
 #
## [Previous](./009_Validations.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./../Readings_005_Full_MERN/001_Intro.md)
#
##  [Index](../Index.md)