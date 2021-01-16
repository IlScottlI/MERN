Consuming APIs
The built-in method to consume data from an API in Javascript is `fetch`, which uses promises. This method has the following syntax:
```jsx
fetch("http://www.example.com")
    .then(response =>{
        //do something
    }).catch(err => {
        console.log(err);
    })
    ```
We can also write it using async/await (ES7):
```jsx
let response = await fetch("http://www.example.com");
```
Knowing this, let's create a simple html file that we can start using `fetch` in.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id = "root"></div>
    <script>
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    </script>
</body>
</html>
```
What did we just do? First, we created a request to the endpoint "https://pokeapi.co/api/v2/pokemon" via `fetch`. If you were to copy this into an `html` file yourself and then open it, you would see the Pokemon response in the Javascript console. Using `fetch` is a very easy way to get a simple request going in your html file.

#
## [Previous](./002_Intro_to_Rest_APIs.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./004_useEffect.md)
#
##  [Index](../../Index.md)