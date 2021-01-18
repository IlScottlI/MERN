#   List and Detail

So far we have the ability to create people. However, how do we know if these people are actually in our database? We could manually check. Or, we could make a request to our api that will retrieve all of the people in our database for us.

Add a function to your controller file that will look like this:

### __server/controllers/person.controller.js__
```js
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}
```
and add this to our routes:
```js
...
app.get('/api/people', PersonController.getAllPeople);
...
```
You can test this with Postman. We can now go back to our React front end. Let's create a new component, called `PersonList.js`.

### __components/PersonList.js__
```js
import React from 'react'
import axios from 'axios';
export default props => {
    return (
        <div>
            {props.people.map((person, idx)=>{
                return <p key={idx}>{person.lastName}, {person.firstName}</p>
            })}
        </div>
    )
}
```
We are just sending in our people and __views/Main.js__
```js
import React, { useEffect, useState } from 'react'
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
    },[])
    return (
        <div>
           <PersonForm/>
           <hr/>
           {loaded && <PersonList people={people}/>}
        </div>
    )
}
```
We are loading all of the people in our main, and only outputting the list of people once we have gotten a response from the api. Next, we will need to create a new view that can show us the details of a particular person. We only have the first and last name of them, so it won't necessarily be that interesting. However, let's see how it works.

In our server, we need another method in our controller:

### __server/controllers/person.controller.js__
```js
module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
```
And add another route:
```js
app.get('/api/people/:id', PersonController.getPerson);
```
Back to React. We will need to create a new file called __Detail.js__ in our views folder:

### __views/Detail.js__
```js
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    )
}
```
Since we have front end routing now, we will need to rework our `src/App.js` file in our React project:

First, run `npm install @reach/router` within your React project.

### __App.js__
```js
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/"/>
        <Detail path="people/:id" />
      </Router>
    </div>
  );
}
export default App;
```
And now we should have a simple project that retrieves our data from our api.

Note: We will currently need to refresh our page in order for the new person to show up. We will be refactoring our code in Advanced MERN in order to achieve this.

#
## [Previous](./005_Create_(Part_II).md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./007_Update_Delete.md)
#
##  [Index](../Index.md)