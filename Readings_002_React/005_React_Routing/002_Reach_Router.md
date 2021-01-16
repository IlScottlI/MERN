# Reach Router
Since we have covered the idea of routing in SPAs, let's look at a way to implement it in React. React has a variety of third party libraries we can use for this purpose, such as React Router and Reach Router. We will be covering Reach Router, but be aware that React Router is also a very popular solution that is widely used. Both follow similar naming conventions as well.

So, let's look at our App.js file that acts as an entry point into our React project. To use Reach Router in a project, first run` npm install @reach/router` to install it and add it to the project's dependencies list. We want to wrap the part of our website that relies on routing within the `<Router>` tag. This will then create a container that all of our routes will live in.
```jsx
import React from 'react';
import { Router } from '@reach/router';
function App() {
  return (
    <div className="App">
        <Router>
            <LoginComponent path="/login"/>
            <DashboardComponent path="/dashboard"/>
        </Router>
    </div>
  );
}
export default App;
```
Within the `<Router>` component, we have two more components with a `path` prop. These tell React that when we go to the path /login, we want to update the DOM so that it shows the `LoginComponent` within the `<Router>` component wrapper. It looks like it is re-routing the page to a new url. In reality, it is just changing what we see on the webpage, without a true refresh of the page. AJAX requests may be firing in the background, but the DOM is changing based on front end Javascript.

## Link
Now that we have a router set up, we want to be able to link to other pages. Traditionally, this is done with an html `a` tag and an `href` attribute. However, a `<Link>` component will not refresh the page. It will simply change the url and change the DOM.

So, you can have a navbar that looks something like this:
```jsx
import React from 'react';
import { Link } from '@reach/router';
const NavBar = (props) => {
  return (
      <div>
        <Link to = "/dashboard">Dashboard</Link>
        <Link to = "/login">Login</Link>
      </div>
  );
}
```
It is as simple as that. Now, we have the opportunity to add front end routing to our project.

## Navigate
What if we wanted to redirect a user to another page in our React project? This can be done with `navigate` ( `import { navigate } from '@reach/router'` ). After performing some action, we can run a method such as `navigate('/success')`, and this will programmatically redirect the user to that front end route.

#
## [Previous](./001_What_is_Routing.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./003_Routing_with_Parameters.md)
#
##  [Index](../../Index.md)