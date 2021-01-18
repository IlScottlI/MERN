#   Reusing Components (Part II)
In our project, we have a "Delete" button in our list of People. Regardless of what we want to do after we send that request to the API, the call to the API and the button will be the same. So, let's break this out into a different component, which accepts a callback function as a prop that will execute after making the API call. Let's break out our delete button into a separate component, where we will accept an `id` prop, and put all of the logic within that component.

### __components/DeleteButton.js__
```js
import React from 'react'
import axios from 'axios';
export default props => {
    const { personId, successCallback } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/person/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}
```
As we can see, The delete button will run the `deletePerson` method whenever it is run. Then, when it is successful, it will execute the `successCallback` function that was passed down in the props. Let's look at how our `PersonList` component will change:

### __components/PersonList.js__
```js
     import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res => setPeople(res.data));
    }, [])
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId))
    }
    return (
        <div>
            {people.map((person, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        |
                        <Link to={"/" + person._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                       <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                    </p>
                )
            })}
        </div>
    )
}
```
Now, we have the `removeFromDom` method that will actually remove the person from our state. This is the method we are sending down as a prop.

Let's add the `DeleteButton` component in the update page, as well.

### __views/Update.js__
```js
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';
export default props => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/person/' + id, person)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                    <DeleteButton personId={person._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}
```
#
## [Previous](./002_Resuing_Components.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./004_Presentational_vs_Container.md)
#
##  [Index](../Index.md)