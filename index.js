class Animal {
    constructor(type){
        this.type = type;
    }
    getAnimalType() {
        console.log(`I am an animal of type ${this.type}`)
        return this.type
    }
    

}

class Dog extends Animal{
    constructor(name, breed){
        super('Dog')
        this.name = name
        this.breed = breed
        this.costOfCareMonthly = 100
    }
    speak() {
        console.log(`${this.name} gavgavgav`);

    }
    getDogsName(){
            console.log(`I am a ${this.getAnimalType()} and my name is ${this.name} `)
    }
    doSomething(){
        console.log(`${this.name} is swimming`);
    }
}

let myPet = new Dog("Mukhtar", "ovcharka")
myPet.speak();
myPet.getDogsName();
myPet.doSomething();

class Cat extends Animal{
    constructor(name, breed){
        super('Cat')
        this.name = name
        this.breed = breed
        this.costOfCareMonthly = 100
    }
    speak() {
        console.log(`${this.name} meowmeow`);

    }
    getCatsName(){
            console.log(`I am a ${this.getAnimalType()} and my name is ${this.name} `)
    }
    doSomething(){
        console.log(`${this.name} is flying`);
    }
}

let Mypet = new Cat("JLO", "bengal")
Mypet.speak();
Mypet.getCatsName();
Mypet.doSomething();