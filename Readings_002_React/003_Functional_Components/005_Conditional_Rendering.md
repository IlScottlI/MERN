# Conditional Rendering
Let's say we want to render something in the DOM that is based on some other value. Using the previous example from the form, we want to have output after the form was submitted. At the top, let's say we want to have an `<h3>` that will say "Welcome. please submit the form." if the form has not been submitted. After we click submit, we want to change the text to say "Thank you for submitting the form!". We can add some logic in our component to take care of this. We will need to add a submit button and a function that will run `onSubmit` (we'll call it `createUser`).
```jsx
import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };
    
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
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

By default, `hasBeenSubmitted` is `false`. When the form is submitted this value in state will be flipped to true which will cause the form to re-render and the `formMessage` function can be run again which will produce a message thanking the user for submitting the form.

## Using Ternary Operators
Ternary operators offer a better way to conditionally render an element. For a Ternary refresher check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). The biggest advantage to us using a ternary operator here, is that we can replace the `formMessage` function we wrote with some code that can go directly into our JSX.
```jsx
{/* rest of component removed for brevity */}
    
<form onSubmit={ createUser }>
    {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    }
    <div>
        <label>Username: </label> 
        <input type="text" onChange={ (e) => setUsername(e.target.value) } />
    </div>
</form>
    
{/* rest of component removed for brevity */}
```
Try using ternary operators when you can, as they are very useful and can make your life as a React developer much easier.

## Handling validations
We could also use ternaries to display potential validation messages to our users, even offering them feedback while they are filling out the form.

Consider the following component.
```jsx
const MovieForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        }
    }
    
    {/* rest of component removed for brevity */}
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Title: </label>
                <input type="text" onChange={ handleTitle } />
                {
                    titleError ?
                    <p style={{color:'red'}}>{ titleError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create Movie" />
        </form>
    );
}
```
Here we can use the fact that JavaScript will treat an empty string as being "falsy" to make our ternaries easier to write. 