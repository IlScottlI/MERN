# Children

Components can also have children. Children of components are those element(s)/component(s) that are within the two "tags" of JSX elements.

Let's say we have the following ```App.js```.

```jsx
import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
    
    
function App() {
  return (
    <div className="App">
        <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    </div>
  );
}
    
export default App;

```

We have a Component called ```MyNewComponent```. There is one prop called ```header``` which we can access within our ```MyNewComponent.js.``` We also have some text between the JSX tags. All components between these two are called "children". We can access them via the following:

```MyNewComponent.js```

```jsx
import React, { Component } from 'react';
    
    
class MyNewComponent extends Component{
    render(){
        return(
            <div>
                <h1>
                    { this.props.header }
                </h1>
                { this.props.children }
            </div>
        );
    }
}
    
export default MyNewComponent;

```

So, we can wrap content with JSX and then nest children.