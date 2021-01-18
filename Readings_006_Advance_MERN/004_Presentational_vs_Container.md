#   Presentational and Container Components
You may have noticed a design pattern that we began implementing. Some components are just accepting props and performing actions based on those props. Others are "doing the work".

For example, our `Main` component is making calls to the API, and any other logic required. The `PersonList` component is simply accepting data and callbacks and props.

This paradigm is what we refer to as "Presentational Components" and "Container Components". We generally have two types of components: one that presents information that is passed down to it and another that does the logic and work to actually get that data. By adhering to this philosophy, it can be quite easy to re-use components, because we can create a generic component, such as a button, that will do something when you click it. The Button component can be completely agnostic as to what this action is. It will simply just execute whatever method you pass down. If we design a button like this, then we can easily reuse it for anytime we want to execute a function when clicking on a button, instead of writing many different buttons that do different things.

Presentational vs Container components are not completely necessary to implement. Just think of it as a tool to have in your toolchest. Interestingly enough, the person who first came up with the idea of Presentational vs Container components, Dan Abramov, has since updated his opinion on them. While it can be useful, you should not try to force this design pattern.

For more information:

Presentational vs Container Components: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0.

In conjunction with Redux: https://redux.js.org/basics/usage-with-react/#presentational-and-container-components

#
## [Previous](./003_Resuing_Components_Part2.md)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> [Next](./005_Material_UI.md)
#
##  [Index](../Index.md)