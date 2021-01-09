`Sensei Class
Extend the Ninja class and create the Sensei class.

    A Sensei should have 200 Health, 10 speed, and 10 strength by default.

    In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. 
speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
`



class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Hello Ninja ${this.name} !`);
    }
    // This should show the Ninja's name, strength, speed, and health.
    showStats() {
        console.log(`
        /*****| Stats |****\\
        Name: ${this.name}
        Strength: ${this.strength} 
        Speed: ${this.speed}
        Health: ${this.health}
        `        );
    }
    drinkSake() {
        this.health += 10;
    }
}


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
    }
    speakWisdom() {
        const message = "What one programmer can do in one month, two programmers can do in two months.";
        console.log(message);
    }
    drinkSake() {
        super.drinkSake();
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"



` 
[*] create a class Sensei that inherits from the Ninja class
[*] add an attribute: wisdom - default to 10
[*] create a method: speakWisdom()
[*] create a method: drinkSake()

`