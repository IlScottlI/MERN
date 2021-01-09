
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

const ninja1 = new Ninja("Hyabusa");
// console.log(new Ninja("Hyabusa"));// -> Ninja { name: 'Hyabusa', health: 100, speed: 3, strength: 3 }
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();