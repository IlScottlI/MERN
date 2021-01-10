# State

So far, our React Components have been displaying information, much of which has be given to them through ```props```. As we make more complicated React apps some of the components we write will need to be able to store their own information. The way Components in React are able to hold onto their own information is inside of a variable we will be calling ```state```. 

A simple example we might have for state might be for modeling a light switch. A light switch has some sort of mechanism we can flip from "On" to "Off". Whether the switch is in the "On" position or the "Off" position is something we could call the "state" of the light switch. We can model this using a React Component like the following.

```jsx

import React, { Component } from 'react';
                
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    
    render() {
        return (
            <fieldset>
                <p>The light is currently { this.state.position }</p>
                <button>Flip Switch</button>
            </fieldset>
        );
    }
}
                
export default LightSwitch;

```

Notice how we now need to write a constructor for our Component, this will let us create an attribute for our LightSwitch Component, one that we will call state. State is something we have to declare as an object, one that will be immutable to us. Inside of the ```this.state``` object we can include a key to store whether the switch is "On" or "Off."  

In the ```render()``` method, we can display the current state of the light switch inside of the familiar ```{ }``` tags. Also let's include a button for now. 

## setState

That button is very tantalizing, it would be oh so great if clicking it would change the state of the light. If we think back to the previous lesson discussing Synthetic Events, we could consider putting an "onClick" event onto this button...

```jsx
<button onClick={ () => { this.state.position = "Off" } }>Flip Switch</button>
```
Unfortunately this is not likely to work as we had hoped. React wants us to treat the state as if it is immutable, and when we're working with state, we should change it using a method called ```setState()```. We can rewrite the above button using ```setState()``` like follows...

```jsx
<button onClick={ () => { this.setState({ position: "Off" }) } }>Flip Switch</button>
```
Now this is a bit more like it, however the switch will only turn the light off, and clicking it again won't turn the light on... we'll need a bit more complicated logic to achieve that. So let's write a method.

```jsx
// this method goes inside of the LightSwitch Component
flipSwitch = () => {
    if( this.state.position === "On" ) {
        this.setState({ position: "Off" });
    } else {
        this.setState({ position: "On" });
    }
}
```
And then we can rewrite our button to use this method instead...

```jsx
<button onClick={ this.flipSwitch }>Flip Switch</button>
```

### Further Reading:

* [state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
* [setState](https://reactjs.org/docs/react-component.html#setstate)