#   Reusing Components
In the previous example, you may have noticed us failing to adhere to an important programming principle: Don't repeat yourself. A lot of the logic for the form for creating and updating an instance is the same. Why should we write similar code over again, especially if we can make one Form component in React? Let's look at how we would do this by refactoring our code.

First, we need to consider the similarities and differences between creating and instance and updating. They both will have the same input fields and same state. So, that will likely stay within the component. On submission of the form, they will perform two different actions. One will send a request to our create endpoint. The other will send a request to our update endpoint.

So, let's consider this to be a difference we will resolve by sending down a prop. This prop will be a function that we will execute when we submit the form. Let's look at what `PersonForm.js` should look like:

### __components/PersonForm.js__
```js
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br />
                <input 
                    type="text" 
                    name="firstName" value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
            </p>
            <p>
                <label>Last Name</label><br />
                <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}
```
As you can see, we are simply creating a form that could be used with any `onSubmit` method that takes in the `firstName` and `lastName` as an object. So, our `Main.js` will look like this now:

### __views/Main.js__
```js
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res =>{ 
                setPeople(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }
    const createPerson = person => {
        axios.post('http://localhost:8000/api/person', person)
            .then(res=>{
                setPeople([...people, res.data]);
            })
    }
    return (
        <div>
           <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
           <hr/>
           {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}
```
Now, we can send down the `onSubmitProp`, which will send a request to our api, and once it is completed, will update state. This will re-render the page, so now we don't have to refresh to see the new person we created.

We are will also change our `Update.js` because it has a form as well. 

### __views/Update.js__
```js
...
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
...
//In our return
{loaded && (
    <PersonForm
        onSubmitProp={updatePerson}
        initialFirstName={person.firstName}
        initialLastName={person.lastName}
    />
)}
```
In our `Update.js`, we are making a request to get the person we are editing, and waiting to display the form until it is loaded. Then, we are sending the callback `updatePerson` which will be executed when the form is submitted.

#
## [Previous](./001_Overview.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./003_Resuing_Components_Part2.md)
#
##  [Index](../Index.md)