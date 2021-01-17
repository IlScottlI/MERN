#   Overview
##  What is MongoDB? Why Use it?
__MongoDB__ is a __NoSQL database__.  Well great, but what is a NoSQL database??  The acronym NoSQL stands for __"Not Only SQL"__. What this means is that while NoSQL __does support a structured query language (SQL)__ there is more flexibility in the storage of the data other than just basic __tabular storage__ (a.k.a housing data in tables). Most importantly, the concept of NoSQL databases emphasizes that there are no relations between the data. Think of it this way:

__In a NoSQL environment, every piece of data is unaware of the other pieces.__

To be even more concise:

### __NO JOINS__
This is different from the traditional relational database model that has been used throughout the software age. Only recently has the adaptation of NoSQL been a prominent phenomenon in the industry. Does this mean every piece of software needs to use a NoSQL database from now on? No. The ideal environment to use a NoSQL database in is one that focuses on speed while having little to no need of relationships between tables (or objects in this case). Reason being: joins are an expensive operation. Think about the concept of a join:
```sql
 SELECT * FROM users LEFT JOIN address ON users.id = address.user_id
 ```
For every user, we have to find the address that matches specifically one piece of information in the address table. Doing this for every entry in your table would take a lot of time. We have dealt with databases in our curriculum that may have a few hundred entries at most. Now imagine a database with a few hundred thousand entries. Now join from another table that has a few hundred thousand entries. This process would be expensive in time and resources.

With the ability of Node servers to use socket connections, we now have the ability to communicate in real-time between clients and servers. But if we need to do an expensive operation on the server side with the database, we'll negate all the speed advantages we've gained using a Node server. This is a good reason to consider MongoDB. There are plenty of NoSQL databases out there, why use MongoDB in particular? Why make it a quintessential part of the MEAN stack?

**`Because everything stored in a MongoDB database is a JSON object.`**

__J.S.O.N.__ Is a JavaScript Object Notation. Here's an example: 
```json
{
 'first_name': 'James',
 'last_name': 'Johnson',
 'age': 32
}
```
#
## [Previous](./../Readings_003_Express/006_Folder_Structure.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./002_Installing_Windows.md)
#
##  [Index](../Index.md)