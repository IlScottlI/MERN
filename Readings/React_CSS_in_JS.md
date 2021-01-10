# CSS in JS
CSS Modules provide an excellent way to isolate our styles by component and thus, keep our apps more modular. However, that's not to say that they don't have some limitations. One such limitation is the inability to dynamically specify style properties depending on certain conditions. In that sense, since a CSS module is really just a regular CSS file, it is limited to the styles we define in it. Of course, we could use inline styles to accomplish more dynamic styling, but at the cost of sacrificing media queries and pseudo-classes, as mentioned in the previous lesson. Enter Styled Components.
## Styled Components
Styled Components is a so-called CSS in JS library, meaning that we actually define our styles using JavaScript. To use Styled Components in your project, run the following in the terminal: ```npm install styled-components```. Here's how we might create a box with some dynamic class properties.
**src/components/StyledBox.js**
```jsx
import React from 'react';
import styled from 'styled-components';
 
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;
 
export default StyledBox;
```
Let's step through this line by line. After importing React, we import the default export from Styled Components and name it styled. Next, we're defining a component called StyledBox. This component is a styled div which we were able to dynamically style using template literals (a string surrounded by backticks). Note that to use the component's props to dynamically change style properties, we had to provide a callback function which takes in the component's props and returns the desired value. When we return ```props.width || '100px'```, that means that the value will be 100px if the value isn't specified (meaning its value is undefined) in the props. Now let's see how we could use this elsewhere in our app.

__src/components/SomeOtherComponent.js__
```jsx
import React from 'react';
 
import StyledBox from './StyledBox';
 
const SomeOtherComponent = () => (
    <div>
        <StyledBox bgColor="blue"/>
        <StyledBox bgColor="red" height="200px"/>
    </div>
)
 
export default SomeOtherComponent;
```
StyledBox is essentially now just a component like any other; specifically, it provides a stylized div wrapper. Note that we could have gotten even fancier with the StyledBox component and had it taken in a minimum width to be visible. We could have then used the provided prop to dynamically establish a media query for its display property;

## Styletron
Styletron is fairly similar to Styled Components, but with some important differences. Instead of using template literals, Styletron uses an object syntax, similar to inline styling with React. To use Styletron in your project, run the following in the terminal: ```npm install styletron-react```. You also need to wrap your application (or whatever part will be using Styletron) with its Provider component and install a second package styletron-engine-atomic to create the engine.

__src/App.js__
```jsx
import React from 'react';
 
import { Provider } from 'styletron-react';
 
import { Client as Styletron } from 'styletron-engine-atomic';
 
const engine = new Styletron();
 
function App() {
    return (
        <Provider value={engine}>
            {/* your other components go in here */}
        </Provider>
    )
}
 
export default App;
```
Now, let's create another StyledBox.

__src/components/StyledBox.js__
```jsx
import React from 'react'; 
import { styled } from 'styletron-react';
 
const StyledBox = styled('div', props => ({
    border: '1px solid lightgray',
    background: props.$bgColor,
    width: props.$width || '100px',
    height: props.$height || '100px',
 
    display: 'none',
 
    ['@media and (min-width: ' + (props.$minWidth || '500px') + ')']: {
        display: 'block'
    }
}));
 
export default StyledBox;
```
After importing React, we specifically import the styled function from styletron. Next, we created a StyledBox component by invoking the styled function with 'div' as the first argument, and a callback function as the second. Our callback function takes the props object and returns a styling object with key/value pairs that must be specified with camel casing (JavaScript doesn't support hyphens as object keys). Finally, here we have created a dynamic media query which will change based on whether a minWidth prop is provided. Now let's use it somewhere else in our app:

__src/components/SomeOtherComponent.js__
```jsx
import React from 'react';
 
import StyledBox from './StyledBox';
 
const SomeOtherComponent = () => (
    <div>
        <StyledBox $bgColor="blue"/>
        <StyledBox $bgColor="red" $height="200px" $minWidth="1200"/>
    </div>
)
 
export default SomeOtherComponent;
```
Note that in order for these styling-specific props to work as expected, they must be preceded with the dollar sign, both in the components themselves and in the calling code. You can read more about this design decision [here](https://www.styletron.org/react/#props-filtering).

In addition to these two, there are a number of other CSS-in-JS libraries, including Emotion.

### Further Reading:
[Styled Components](https://styled-components.com/)

[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[Styletron](https://github.com/styletron/styletron)

[Emotion](https://emotion.sh/docs/introduction)