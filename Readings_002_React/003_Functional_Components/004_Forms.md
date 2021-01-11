# Forms
We don't usually get very far with our website before we eventually need to write some forms. Forms are our opportunity to have a conversation with our users, and so represent one of the most important elements of our application. There are two basic ways to deal with forms in React.

1.  `state`: Track input values as a piece of your state, updating them on change events and rendering them back out to the UI. These are called controlled components.
2.  `refs`: Attach a pointer to `DOM` nodes like inputs and textareas and reach out to inspect their values once our form is submitted. We call these [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html).

We'll favor the __controlled component__ strategy because it allows React to continue to sit between us and the actual `DOM`.

## Let's see this in action
### UserForm.jsx
```jsx
import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
```
Notice how we're now using two new Synthetic Events, `onChange` and `onSubmit`.

## onChange
This event is run whenever the value in the input is changed. When we use it we need accept a parameter into our function, `e`. The `e` variable contains all sorts of nifty event information, where `e.target` is the "target" of the the event, in other words the `<input />` element, and `e.target.value` is the information currently typed into the input.

## onSubmit
This event runs when the user submits the form by clicking on the submit button. Like the `onChange` it will also need accept an `e` parameter that is also full of event information. This time, we want to prevent the default form behavior by using `e.preventDefault()`. The default form behavior is submitting the information to the route in the "action" which causes a page load. We want to handle this information ourselves.

## createUser
When the `onSubmit` event occurs, we have written a function that handles what to do with the form data. The form data for each input is being held in state using separate hooks. If we want to bring all of the fields together, we can declare a new object and put the variables in it. To make this a little more convenient, we can make use of [Property Value Shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015) a new ES6 notation.

Instead of writing
```jsx
const newUser = { username: username, email: email, password: password };
```
we can write just
```jsx
const newUser = { username, email, password };
```
if we are happy having the key receive the same name as our variables.

## Cleaning up
Notice how after submitting this form, the current values in the form inputs just stick around. Because we haven't let the page reload (we prevented default), this is the expected behavior. In fact this is a good thing as when we add in validations to our form later, if the form happens to be invalid then the information the user typed in will still be there for them to fix instead of having to remember what they had typed in before.

If we want to clear the form after it's been submitted, we can do it with some small modifications to our code above.

On each of the inputs, we will now include a value attribute that we set equal to the corresponding `useState` variable.
```jsx
<input type="text" onchange={ (e) => setUsername(e.target.value) } value={ username } />
```
We've now applied what's known as two-way data binding, and whatever value is currently in the `username` state will match what is in the form.  

What that means for us is that inside of the `createUser` function we can set `username` back to an appropriate starting value.
```jsx
// inside of the createUser function
setUsername("");
```