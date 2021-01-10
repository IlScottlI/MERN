# Lifecycle Methods
Using class components gives us easy access to React's lifecycle methods. Every component, whether functional or class, has a cycle it goes through from the point it is created and mounted to the point it is destroyed and unmounted. This cycle is referred to as a Component lifecycle. The methods we use to access these lifecycles are referred to as "Lifecycle Methods." These methods are automatically called in the background. A component's lifecycle can be split into 4 stages and each stage has methods that run in a particular order. Let's go over what the stages are and, within each state, we will explain the exact method that runs and a brief overview of what that method is actually doing.
## Mounting

This stage is the process in which React is creating and inserting the component into the DOM.
1.  This stage is the process in which React is creating and inserting the component into the DOM.
    1.  This is where you would assign state to the component and bind event handlers. React will then set the default and initial values for both the component's properties (props) and the component's state.
    2.  This is the first method called before the component is actually mounted to the DOM.
    3.  NOTE: this is not where we would make API calls or introduce subscriptions.
2.  render()
    1.  this is where the html content will be processed and rendered.
3.  componentDidMount()
    1.  this immediately follows the completion of the render method. This is where we would initiate any kind of network request, subscription, timer, or if we needed to target a DOM node from the component tree.
   
## Updating

This is a stage that will run every time we update the components state or properties.

1.  shouldComponentUpdate(nextProps, nextState)
    1.  This method gives us the ability to explicitly tell React whether or not the component should be re-rendered after a change in state or props. We use this to optimize performance. By default this method returns true. We could return false if we didn't want the component to re-render.
2. render()
   1. depending on the return value of shouldComponentUpdate(), this will either re-render the content or not.
3. componentDidUpdate(prevProps)
   1. whatever the previous method returns becomes the third argument for this method which allows us to compare the prevProps, prevState, and the snapshot value that was just returned.
   
## Unmounting
This is the final stage in which React will unmount the component and remove it from the DOM.
1.  componentWillUnmount()
    1.  This is invoked right before the component is unmounted. This is the ideal place to cancel any on-going network requests, subscriptions, or clear timers.
   