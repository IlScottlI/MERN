# Update and Delete
### __Update__
Let's look at how we can update items in our database. First, let's set up our API endpoint. Let's add a route:
```js
app.put('/api/people/:id', PersonController.updatePerson);
```
And then add a new method to the controller:
```js
module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}
```
Next, let's look at how we can implement this in React: We will need to add a new view:

### __views/Update.js__
```js
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { id } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, {
            firstName,
            lastName
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" 
                    name="lastName"
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
```
Let's talk about what we are doing here. First, we are making a request to our server to get the person with `id` equal to the one in the url. When this request resolves, we set our states to the response. We have defined an `updatePerson` method. This will send a PUT request to update the instance in the database.

Now, we can update our `App.js` in order to include another route.
```js
...
// Your other routes
<Update path="people/:id/edit"/>
...
```
Lastly, in your Detail.js, you can add the following snippet in order to link to the Edit page:
```js
<Link to={"/" + person._id + "/edit"}>
    Edit
</Link>
```
### __Delete__
The last part of CRUD is delete. Let's look at how to do that.

We will add a route:
```js
app.delete('/api/people/:id', PersonController.deletePerson);
```
And then a method to our controller:
```js
module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
```
Let's now add the functionality to our front end. With axios, we can simply make an `onClick` event for a delete button. Let's add this method to our `PersonList.js`:

### __views/PersonList.js__
```js
import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
    }
    return (
        <div>
            {props.people.map((person, idx) => {
                return <p key={idx}>
                    <Link to={"/" + person._id}>
                        {person.lastName}, {person.firstName}
                    </Link>
                    |
                    <button onClick={(e)=>{deletePerson(person._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
```
What are we doing here? We are sending a request to our api to actually delete our person. However, we will also need to remove the person from the DOM. At this point, we are simply sending the method as a callback. We will add this logic in our `Main.js`, so that we can change the `people` state.

### __views/Main.js__
```js
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    },[]);
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }
    
    return (
        <div>
           <PersonForm/>
           <hr/>
           {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}
```

#
## [Previous](./006_List_Detail.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./008_Looking_Ahead.md)
#
##  [Index](../Index.md)