
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.resilience -= this.power;
            console.log(`${target.name} was attacked by ${this.name}`)
            target.logStats()
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    logStats() {
        console.log(`
        Stats 
        Name: ${this.name}
        Power: ${this.power} 
        Cost: ${this.cost}
        Resilience: ${this.resilience}
        `        );
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            switch (this.stat) {
                case 'resilience':
                    target.resilience += this.magnitude;
                    break;
                case 'power':
                    target.power += this.magnitude;
                    break;
            }
            console.log(`${this.text.replace("target's", `${target.name}'s`)}`)
            target.logStats()
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    logStats() {
        console.log(`
        Stats 
        Name: ${this.name}
        Cost: ${this.cost}
        Text: ${this.text}
        Stat: ${this.stat}
        Magnitude: ${this.magnitude}
        `        );
    }
}


// Turn 1
redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
Hard_Algorithm = new Effect('Hard Algorithm', 2, "increase target's resilience by 3", 'resilience', 3).play(redBeltNinja);
// Turn 2
blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
Unhandled_Promise_Rejection = new Effect('Unhandled Promise Rejection', 1, "reduce target's resilience by 2", 'resilience', -2).play(redBeltNinja);
// Turn 3
Pair_Programming = new Effect('Pair Programming', 3, "increase target's power by 2", 'power', 2).play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
`
    Unit Cards
name	            cost	power	resilience
Red Belt Ninja	    3	    3	    4
Black Belt Ninja	4	    5	    4

    Effect Cards
name	                        cost	text	                            stat	      magnitude
Hard Algorithm	                2	    increase target's resilience by 3	resilience	    +3
Unhandled Promise Rejection	    1	    reduce target's resilience by 2	    resilience	    -2
Pair Programming	            3	    increase target's power by 2	    power	        +2


    Play out the following scenario
turn	action
1	    Make an instance of "Red Belt Ninja"
1	    Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
2	    Make an instance "Black Belt Ninja"
2	    Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
3	    Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
3	    "Red Belt Ninja" uses the attack method on "Black Belt Ninja"

 [*] Make an instance of Unit called "Red Belt Ninja"
 [*] Make an instance of Unit called "Black Belt Ninja"
 [*] Make an instance of Effect called "Hard Algorithm"
 [*] Make an instance of Effect called "Unhandled Promise Rejection"
 [*] Make an instance of Effect called "Pair Programming"
 [*] Play out the scenario described above


 `