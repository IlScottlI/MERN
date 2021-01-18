#   Create (Part II)

Let's tie in the creation to our __React project__. Within the `src` folder, let's add two more folders: `views` and `components`. Then, let's move `Main.js` to the `views` folder. We can change our `Main.js` to have a form, now. Within our `components` folder, let's create a new file called `PersonForm.js`. This component will be the form that we can add a person to and make a request to our API.

### __components/PersonForm.js__
```js
import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
```
Now, we have a functional (albeit not a very interesting looking) form.

We just need to update our React project so that it shows up in the DOM. Change your Main.js file to the following:

### __views/Main.js__
```js
import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
export default () => {
    return (
        <div>
           <PersonForm/>
        </div>
    )
}
```
Now you can test out your form to see if it is working. You should be able to see the response in your console.
#
## [Previous](./004_Create_(Part_I).md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./006_List_Detail.md)
#
##  [Index](../Index.md)