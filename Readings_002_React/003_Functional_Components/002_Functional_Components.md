# Functional Components
We can also write React components with functions. Let's look at a simple implementation of a functional React component:

**PersonCard.js**
```jsx
import React from 'react';
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;
```
We are using an arrow function that accepts an argument, ```props```. We can access the values being passed down via ```props.valueName```. So, if we were to render the Component like this:

```jsx
<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
//Note: we can pass down a string with or without curly braces.
```
We will be using functional components extensively throughout this course.