# Axios
Fetch is extemely useful in vanilla Javascript, but thanks to the NPM community, there are many third party libraries that allow us to easily expand upon the functionality of Javascript. One of these libraries is Axios. Axios is a library that allows us to easily configure API calls in Javascript and our React app. You can use a CDN or install it directly into your NPM project. To install it in your NPM project:

    npm install axios
Now, you can use it in your project by doing the following:
```jsx
import axios from 'axios';
...
axios.get('http://www.example.com').then(response=>{
    console.log(response);
})
```
This looks very similar to `fetch`. However, we can specify the type of the request directly using Axios, so there are no extra arguments required to specify a `POST` or `GET` request.

Let's talk about the `useEffect` hook again. When we make API calls, we will generally want to do it only when the component first renders. For example:
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
...
const someComponent = props => {
    //Note the second argument is an empty array. We are only 
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('http://www.example.com')
            .then(response=>{setResponseData(response.data)})
    }, []); 
    return(
        <div>
            {responseData}
        </div>
    )
}
```
Documentation:

For more information regarding Axios: https://github.com/axios/axios.

#
## [Previous](./004_useEffect.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./)
#
##  [Index](../../Index.md)