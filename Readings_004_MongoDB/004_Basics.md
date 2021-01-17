#   Basic MongoDB Concepts

The best way to fully grasp the basics of MongoDB is to compare the essential structures with their counterparts in the normal SQL universe. There are three basic comparisons to make that will give you the essentials to get rolling. Alongside that, we will also show you the basic commands to use in your MongoDB shell (which is another name for the terminal program we are running to connect to our DBs).

Database Type: |	__SQL__ |	__Mongo__
------------ | ------------- |  -------------
__Database__    |	Schema  |	Database (db)
__Collection of related records__	|   Tables  |	Collections
__Each one record in the collection of records__    |	Row / Record    |	Document
###  __MySQL Database Schema == MongoDB Database (db)__
No surprises here; the database is still the unit we use to hold an entire project's data. MongoDB is crazy, but not crazy enough to not need to use the term database! Note that from our Mongo shell, we have access to all the databases stored on our Mongo server.
|   |   |
------------ | ------------- | ------------- 
__Show all databases__ available on our current MongoDB server  |	Example: <br> __show dbs__ |
__Show current database__ selected  |	Example:  <br>  __db__
__Change to another database__  <br>Note: If the database you're trying to switch to does not exist, Mongo shell will create a new database and switch to it. |Pattern:<br>__use DB_NAME__<br>Example:<br>__use__<br>__message_board_db__    |
__Delete database__<br>Note: db.dropDatabase() will delete the current database in use.|Example:<br>__use__<br>__message_board_db__<br>__db.dropDatabase()__

### ___SQL: Tables == MongoDB: Collections___
A SQL database is comprised of tables. Tables contain groups of similarly-structured pieces of data. This shouldn't be new to you, but it is important to take a step back and review what you've learned through a more theoretical lens. MongoDB databases are comprised of collections. A collection is the MongoDB analog to a SQL table.
|   |   |
------------ | ------------- |
__View all__ collections in a MongoDB   |	Example:<br>__show collections__
__Create__ a new collection in the current database|	Pattern:<br>__db.createCollection("COLLECTION_NAME")__<br><br>Example:<br>__db.createCollection("ninjas")__
__Destroy__ a collection    |   Pattern:<br>__db.COLLECTION_NAME.drop()__<br><br>Example:<br>__db.ninjas.drop()__
There's not much to say about collections right now. That's because __collections are really just in place to corral individual records__. There is no structure to a collection, which is part of why MongoDB is powerful, but also part of why a NoSQL database is not a one-size-fits-all solution. This is very different than tables in a SQL database; __tables are normally where we define all the structure of a particular facet of our database in a SQL database__. Column names and their data types are very important in the world of relational databases. In NoSQL land, they are much less important, as you will soon find out.

### __SQL: Row / Record == MongoDB: Document (JSON object)__
This is it. This is why we use MongoDB. SQL table rows have the rigid structure: every entry in a database (i.e. every row) has the same fields. This is not the case in MongoDB. Each document is a JSON object and is able to have any number of key-value pairs you so desire. And just like in regular Javascript objects, we can add key-value pairs to objects on the fly. When you use a NoSQL database, you gain speed but lose rigidity; you trade structure for flexibility. This should make sense. Remember, people use Mongo for its speed. If we can't write to objects on the fly, we might slow down our transactions and that would be counterproductive.

Technically, we've lied. MongoDB doesn't use JSON objects to store your data. They use what's called BSON (Binary JSON). BSON is friendlier to store (due to it being binary; don't stress about this) and can support a few more things (like dates, which are not part of JSON, but crucial for databases). But for all intents and purposes, MongoDB documents are to be treated and used as if they were ordinary JSON. Trust us! The next tab will delve into working with documents, so let's get moving!
#
## [Previous](./003_Installing_Mac.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./005_Documents.md)
#
##  [Index](../Index.md)