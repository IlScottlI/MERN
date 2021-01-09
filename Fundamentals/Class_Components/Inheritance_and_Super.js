`
Inheritance is much easier with the ES6 class syntax. 
Using the extends keyword, we can define new classes that inherit from existing classes. 
Inheritance is a common aspect of OOP, and it's important to see how JavaScript does it a little differently. 

Let's see inheritance in action:
`

// // parent Vehicle class
class Vehicle {
    constructor(manufacturer, model, color, year) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.year = year;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`);
    }
}


let Geo = new Vehicle(
    'Geo',
    'Storm',
    'Blue',
    '1992'
)

// console.log(Geo)

// Geo.drive()

// console.log(Geo)


// parent Vehicle class
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`);
    }
    // simple method in the parent class
    parentFunction() {
        return "This is coming from the parent!";
    }
}
// child M5 class
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
const m5 = new M5("Blue");
m5.childFunction();



