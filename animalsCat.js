class Animal {
    constructor(name, breed, costOfCareMonthly) {
    this.name = name;
    this.breed = breed;
    this.costOfCareMonthly = costOfCareMonthly;
    }
  
    speak() {
      console.log(`${this.name} meowmeowmeow`);
    }
    doSomething() {
      console.log(`${this.name} goingtosleep`);
    }
    }
  
  let cat = new Animal("Barsik", "Cat", 700);
  
  console.log(cat.name) 
  console.log(cat.breed) 
  console.log(cat.costOfCareMonthly) 
  
   cat.speak();
   cat.doSomething();