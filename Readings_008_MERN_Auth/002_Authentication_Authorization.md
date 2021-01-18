# Authentication and Authorization
When you are creating users for a website, you will often hear the words "Authentication" and "Authorization" thrown around. What do those actually mean?

### __Authentication__
This is the process of ensuring that the user logging in is who he or she claims to be. We do this by comparing the submitted password to the one stored in the database for the given email address or username. In practice, we compare a hashed version of both the submitted and stored password for additional security. If the two password hashes match, the user is __authentic__.

### __Authorization__
Now that we know who is making a request (or not if the user is not logged in), we need to determine whether he or she has permission to access the requested resource. You can think of it as checking to see whether a particular key fits a specific door. For example, if you go to Facebook, __you__ should only be authorized to view and make edits to __your__ profile page. You should not be authorized to make edits or view sensitive information in others' pages.

Accordingly, we will be creating logic to make sure that people are authorized to view pages, in addition to authenticating the users.

#
## [Previous](./001_Introduction.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./003_User_Model.md)
#
##  [Index](../Index.md)