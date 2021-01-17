#   Installing - Mac
Up until this point, you've run database servers alongside your web servers. This is because we've been using an all-inclusive package (WAMP/MAMP) that has a web server and a database server that can boot up together. In some cases, database servers and web servers are decoupled. This will be the case with MEAN stack applications. So once we install MongoDB, we will have to learn how to boot up a server and then connect to it. There is no GUI (graphical user interface) for MongoDB (yet); anytime you want to query your MongoDB, you must access it through the command line (yay!).

If you don't have Homebrew, get it. Homebrew is a package manager/install tool and the reason why installing things on Macs takes literally no time at all. Get Homebrew [here](http://brew.sh/). Your life is now complete. Now we can run the following commands:
```terminal
xcode-select --install
```
The above code may say 45 minute install time however, it will likely take no more than 10 minutes. After it's complete, we can run:
```terminal
brew tap mongodb/brew
```
```terminal
brew install mongodb-community@4.2
```
##  Running the MongoDB server:
```terminal
brew services start mongodb-community
```
That's it. If that was successful, the terminal should fill with a bunch of information and you should not be able to see your normal terminal prompt line, only a beeping underscore. This means your server is up and running.  What we have done is to run our database server and thereby open our MongoDB databases up for connections so we can query the DB and do CRUD operations.

##  Connect to your database:
To connect to your MongoDB databases, in your terminal, type...
```terminal
mongo
```
Now you should see the terminal cursor become a single arrow and beeping underscore. We're in!

###  __Shutting down if your mongod window got closed__:
This is harder.  Open a terminal window and type:
```terminal
ps -ax | grep mongo
```
then copy the number on the left of the row that shows 'sudo mongo' (or if that's not there, just 'mongo')  This is the process ID of the mongod command you ran.  Take that number and type
```terminal
sudo kill *that_number*
```
And you'll be good.  The kill command tells a process ID to terminate.  Intense terminal stuff, huh?
#
## [Previous](./002_Installing_Windows.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./004_Basics.md)
#
##  [Index](../Index.md)