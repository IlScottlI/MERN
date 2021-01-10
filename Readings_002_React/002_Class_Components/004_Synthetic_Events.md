# Synthetic Events
React uses a custom approach to adding event listeners to our elements by wrapping the browser's native elements and applying its own event system called "Synthetic Events." There are a few key things to keep in mind about Reacts synthetic event system:

* The event names are instead camelCased vs lowercase (i.e "onclick" becomes "onClick")
* Returning false will not work with any event to prevent bubbling. You will need to manually ```callevent.stopPropagation()``` or ```event.preventDefault()``` as necessary.
  
So how do we add events to our app? The simplest event we can choose is the user clicking on something in our app, perhaps a button.

When we test out the following code snippet, the button will now react to being clicked by alerting that ```"This button has been clicked!"```.

While ```onClick``` is an event we will use quite quite often, there may be others we might want to use. These are a few of the many events we might use at some point.

*   onChange - an event that runs when a form input is changed
*   onSubmit - an event that runs when a form is submitted
*   onFocus - an event that is run when an element is given focus (clicked on or tabbed to)
*   onBlur - - an event that is run when an loses element focus (the user clicked away)

For a more exhaustive list, consult the excellent React documentation on [Synthetic Events](https://reactjs.org/docs/events.html#supported-events).

Further Reading:
[Handling Events](https://reactjs.org/docs/handling-events.html)