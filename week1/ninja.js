class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`My name is ${this.name}!`)
    }
    showStats(){
        console.log(`You've got ${this.strength} strength, ${this.speed} speed, and ${this.health} health!`)
    }
    drinkSake(){
        this.health+=10
    }
}

const nin = new Ninja("Justin",100)
nin.drinkSake()
nin.sayName()
nin.showStats()