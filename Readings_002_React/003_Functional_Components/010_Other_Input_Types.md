# Other Input Types
Thus far, we've covered how to deal with regular HTML input elements. However, forms often need different types of input. Two such input types are the select element and the checkbox. Here is an example of how we can create a form with these two:
```jsx
import React, { useState } from 'react';
 
const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];
 
export default function FruitForm() {
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(false);
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit + ' is' + (isTasty ? '' : ' not') + ' tasty!');
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <select value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)}>
                {fruits.map((fruit, idx) => (
                    <option key={idx} value={fruit}>{fruit}</option>
                )}
            </select>
            <label>
                <input type="checkbox" checked={isTasty} onChange={e => setIsTasty(e.target.checked)}/> Is it tasty?
            </label>
            <button>Take a bite!</button>
        </form>
    );
}
```
## Select Elements
With a select element, the onChange callback looks exactly as those that we've been writing for regular inputs. Here are a couple potential gotchas:

Each option must have a value; otherwise, you could end up allowing your state variable to become `undefined`.
If you don't pass an initial value to the useState call, the initial value will be `undefined`. This is not likely what you want. Instead, if you want a blank value, you can pass an empty string as the initial value, and set up an empty option above where you map over the others, as in the following:
```jsx
...
const [myVal, setMyVal] = useState('');
...
<option value="">Please select a value</option>
{options.map(...
```
## Checkboxes
Checkboxes in React are tricky when you first come across them. Instead of a value, they have a checked property, which is either true or false. To handle clicks on the checkbox, and thus state changes, we can call the setter function with the event target's checked attribute. This allows us to keep our state variable in sync with the state of the checkbox.
#
## [Previous](./009_Sending_Arguments_in_Callbacks.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./011_Context_API.md)
#
##  [Index](../../Index.md)