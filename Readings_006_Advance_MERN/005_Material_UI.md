# Material-UI (Optional)
One of the great things about React is the number of different libraries you can plug in with it. One such library is Material-UI. You can use Material-UI with React to improve the styling of your apps. One of the important things we have talked about is reusing components. Material-UI is filled with a bunch of reusable components that you can use to make your site easily look great. Let's create a new React project:
```js
npx create-react-app client
```
Once that is created, change directories into that folder and install Material-UI:
```js
npm install @material-ui/core
```
This is all we need to install it. Like Bootstrap, Material-UI has plenty of different components that you can use. We won't go through all of them, but let's look at a couple items by building a Registration form.

### __Paper and Cards___
Material-UI has different surfaces we can use in order to make a component look nice. A `Paper` component is one that will give a nice background and potentially some elevation to a component. For example:
```js
import { Paper } from '@material-ui/core';
...
<Paper elevation={3}>
    <p>Some text here</p>
</Paper>
```
Depending on how you want the component to look, you can give it different elevations to make it appear "higher up" on the page.

You may want to use a card as well:
```js
import { Card } from '@material-ui/core';
...
<Card>
    <CardContent>
        <h1>This is content within my card</h1>
    </CardContent>
</Card>
```
### __Buttons__
Material-UI has very nice looking buttons as well. It is as simple as importing it and implementing it:
```js
import { Button } from '@material-ui/core';
...
<Button>
    Click Me
</Button>
```
### __Forms__
Material can make very nice looking forms as well. We can do something simple like
```js
<TextField variant="filled"/>
```
The documentation for Material-UI is extremely easy to read. If you have any questions about components you want to use, please look at it.

### __Example__
Let's look at a quick example of how we can create a Registration Form. We will put the form on a `Paper` component. Then, we can put our input fields within the `Paper` component as children.

### __components/LoginForm.js__
```js
import React from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}
export default function LoginForm() {
    return (
        <Paper elevation={3} style={styles.paper}>
            <h2>Login Form</h2>
            <form>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>E-mail</InputLabel>
                    <OutlinedInput type="email"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Paper>
    )
}
```
### __Additional Libraries__
There are many libraries out there to assist you with the design of your website. Although we are covering Material-UI, you can use whatever you would like to make your website look the way you want (including potentially making your own). If you are interested, you can look into Reactstrap https://reactstrap.github.io/, which helps you use Bootstrap components in React. Another one is Semantic UI https://react.semantic-ui.com/. Feel free to look at the designs and see if you like using them instead.

#
## [Previous](./004_Presentational_vs_Container.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./006_Validations.md)
#
##  [Index](../Index.md)