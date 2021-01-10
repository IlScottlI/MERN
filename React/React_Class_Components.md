## <h1> Class Components </h1>

## <h3> _Note:_ The components are stored in a folder ```Project_Folder/src/components```  </h3>

<p>

#
A React component is simply defined by a function that returns a React Element. Since the beginning, we've been writing functional components. But we can also write an ES6 Class that will return a React Element as well.

Class Component
When creating a Class Component there are a couple things we have to do in order for it to be a valid component. Each class must:

Have a name starting with a capital letter.
Extend React.Component. 

Have a render() method that returns a React Element either by JSX or React.createElement(). Below, we are using JSX.
</p>

```javascript
import React, { Component } from "react";

class SomeClassComponent extends Component {
  render() {
    return <div>This is our first class component.</div>;
  }
}

export default SomeClassComponent;
```
# <h1>Props </h1>
Props, short for properties, is an empty object that is passed to every React component by default. To pass props down to our child components, we simply need to add an html attribute to our component. Each attribute will become a key in the props object and each value given to that attribute will become the value of that key.

To access props in a class component, we will need to precede the props with the keyword this. Because our class components extend React.Component, we already have access to the props variable that React has defined in the Component class.

```jsx
class Header extends React.Component {
    render() {
        return (
            <div>
                // By inheriting from React.Component all we need is the "this" keyword in front of props.
                <h1>My name is { this.props.firstName } { this.props.lastName }</h1>
            </div>
        );
    }
}
```

We could also destructure our class props this way

```jsx
class Header extends React.Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <div>
              // Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar.
                <h1>My name is { firstName}  { lastName }</h1>
            </div>
        );
    }
}
```
# <h1>Flow of Data</h1>
Because the data flow in React flows downward, we use props all the time to pass data down from component to component. We are not limited in the amount of stuff we can pass down in props. We can pass down anything we want including functions.

__A Note on Curly Braces: In JSX, we use curly braces to denote a Javascript expression. Typically, you can only send down Strings in props. However, with curly braces, we can send Javascript expressions (assuming they are valid). This includes numbers, strings, functions, objects, etc. Let's look at valid ways to pass down props:__

```jsx
<SomeComponent someProp="test" someOtherProp={ 67 }/> //Valid. We can send normal strings, but in numbers need curly braces
<SomeComponent someProp={ "test" } someOtherProp={ 67 }/> //Valid. A String is still a Javascript expression
<SomeComponent someProp="test" someOtherProp=67/> //Invalid. Numbers need curly braces
````

*When in doubt, use curly braces.*