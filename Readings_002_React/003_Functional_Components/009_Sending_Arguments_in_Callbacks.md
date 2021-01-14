# Sending Arguments in Callbacks

At some point, you will need to send additional information in a callback. Let's look at the following example:
```jsx
const MyComponent = props => {
    const onClickHandler = (e) => {
        alert("You have clicked the button");
    }
 
    return props.movies.map( (item, index) => {
        return <button onClick={ onClickHandler }>{ item }</button>
    });
}
```
This is a simple component that will alert you whenever you click on a button. We have sent down an array of movies; we want to click a button and alert the name of the movie. How would we accomplish this? Unfortunately, when our onClickHandler function is invoked, it will only be provided with the event as its argument, which doesn't directly tell us which movie we need to alert. So, we will need to send down a new callback function.
```jsx
const MyComponent = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }
 
    return props.movies.map( (item, index) => {
        return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    });
}
```
We have defined a new inline anonymous callback function that, when invoked, will then call our `onClickHandler` with the appropriate item.
#
## [Previous](./008_Lifting_State.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./010_Other_Input_Types.md)
#
##  [Index](../../Index.md)