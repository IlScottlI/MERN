# Classes
## Introduction
With the introduction of ES6, JavaScript developers now have access to the Class keyword.

## Class and constructor
Let's define a simple class: Vehicle. A Vehicle will have miles, manufacturer, model, and color. Consider the below definition:

```js
class Vehicle {
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles += 10;
    }
}
```
We're defining our `class` using the class keyword. In addition, we're defining a method called constructor. All ES6 classes have a constructor, and the constructor always runs whenever we create a new instance. To create a new instance of a Vehicle, we must supply the following three arguments to the constructor: manufacturer, model, and color. `miles, manufacturer, model, and color` are Properties of a Vehicle and `drive()` is a Method (we call it method because it is a function inside of a class.....).

Creating and using a new instance of Vehicle would look like this:
```js
const car = new Vehicle("BMW", "M5", "blue");
car.drive();
console.log(car.miles);
```
Take note: __Classes are NOT hoisted. No matter what, the class keyword will stay where it was written and not move during interpretation__.