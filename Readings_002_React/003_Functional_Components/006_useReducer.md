# useReducer
Until now, we've been working with simple state, and we have been able to update it on a granular level with the useState hook. However, if we want to have complex state similar to what we can achieve with class components, React gives us the useReducer hook. With useReducer, we can create complex state and manage it in a similar fashion to how it is done with the popular state-management library Redux. Here's an example of how we can incorporate the useReducer hook:
```jsx
import React, { useReducer } from 'react';
 
const initialState = {
    name: '',
    email: ''
};
 
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}
 
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
 
    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}
```

Let's step through this piece by piece. We import the useReducer hook from React. Next, we establish an initial state object with two keys: name, and email. Both have their initial values set to empty strings. Next, we create a reducer function which takes in the state, and an action object. The reducer's job is to return a new state object (not mutate the original) using the current state and the given action object. Accordingly, we can use the spread operator to clone the current state, and override the specific piece of the state we want to alter with the new value (the action's payload value).

Inside our functional component, we invoke the useReducer function by passing in our reducer function and the initialState object. Next, we create a handleChange function which takes in an event. Inside the function body, we destructure the name and value from the event's target, which will be one of the inputs. Then, we call the dispatch function (returned when we invoked the useReducer hook) by passing it an object with a type equal to the input's name and a payload equal to the input's new value.

Finally, we render some JSX. Inside opening and closing div tags, we have stringified our state object to easily keep track of it, and we have individual divs for the two inputs. Each input has three attributes: its name, its value (taken from the state object), and an onChange function, which is the handleChange function we established earlier.
