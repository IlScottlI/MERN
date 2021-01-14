# Convert to Arrow
You are at a company that does not have a great front end for its website, but they pride themselves on their JavaScript. Since they only care about adding random JavaScript functionality, they don't want you to change the CSS of this site. They have given you a task to update the Javascript in their site to ES6, so that every method being called uses arrow functions.

Take the following HTML and update all functions to arrow functions.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrow Functions</title>
</head>
<body id="body">
    <h1>My Boring Website</h1>
    <p id="paragraph">
        This website is boring, with very little CSS. 
        However, we really just care about the javascript. 
        For example, if you click <button id="button">this button</button>, the background of this paragraph tag will change to blue.
    </p>
    <p>We also have a <button id="alert">alert</button> button that will grab the text from the input below and show it in a popup.</p>
    <div>
        <input type="text" id="popup-input">
    </div>
    <p>
        We just like random interactivity in the site, including a fun effect if you hover over <span id="hover-this">        <b>this.</b></span>
    </p>
    <p onmouseover="mouseOverFunction(this)">
        Another task: This should be another feature. 
        I want to click anywhere in this paragraph tag and I want to be able to change the background color to whatever is in this input: <input type="text"/>.
    </p>
    <script>
        document.getElementById("button").onclick = function() {
            setBackgroundColorById("paragraph", "blue");
        }
        document.getElementById("alert").onclick = function(){
            alert(document.getElementById("popup-input").value);
        }
        document.getElementById("hover-this").onmouseover = function(){
            setBackgroundColorById("body", "red");
        }
        document.getElementById("hover-this").onmouseout = function(){
            setBackgroundColorById("body", "white");
        }
        function getValueFromId(id){
            return document.getElementById(id).value;
        }
        function setBackgroundColorById(id, color){
            document.getElementById(id).style = "background-color: " + color;
        }
        function mouseOverFunction(el){
            el.style = "background-color: black";
        }
    </script>
</body>
</html>
```
 - [ ]  Update all methods to become Arrow functions
 - [ ]  Connect the EventListener `setBackgroundColorById` to the paragraph in the HTML
#
## [Previous](./008_Arrow_Functions.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./010_Ternary_Operator.md)
#
##  [Index](../../Index.md)