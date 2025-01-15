// class person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greek() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
//     }
// }

// const newPerson1 = new person('Jack', 33)

// newPerson1.greek()


// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     #speak() {
//         console.log(`${this.name} speak`)
//     }
// }

// class Cat extends Animal {
//     constructor(name, brit) {
//         super(name)
//         this.brit = brit
//     }
//     move() {
//         console.log(`${this.name}, ${this.brit} cat, went home 3 hours ago`)
//     }
//     drinkMilk() {
//         console.log('Cat like milk')
//     }
// }

// const cat1 = new Cat('Jora', 'british')

// cat1.speak()
// cat1.move()

// class Dog extends Cat {
//     constructor(name, brit) {
//         super(name)
//         this.brit = brit
//     }
// }

// const dog = new Dog('Dog', 'doberman')
// dog.speak()



// class BankAccount {
//     constructor(balance) {
//       this._balance = balance; // Захищена властивість
//     }
  
//     // Захищений метод
//     _getBalance() {
//       return this._balance;
//     }
//   }



//   class Circle {
//     constructor(radius) {
//       this._radius = radius;
//     }
  
//     get radius() {
//       return this._radius;
//     }
  
//     get area() {
//       return Math.PI * this._radius ** 2;
//     }
//   }
  
//   const circle = new Circle(5);
//   console.log(circle.radius); // 5
//   console.log(circle.area); // 78.53981633974483



//   class Temperature {
//     constructor(celsius) {
//       this._celsius = celsius;
//     }
  
//     get celsius() {
//       return this._celsius;
//     }
  
//     set celsius(value) {
//       if (value < -273.15) {
//         console.log("Temperature below absolute zero is not possible.");
//         return;
//       }
//       this._celsius = value;
//     }
  
//     get fahrenheit() {
//       return this._celsius * 9 / 5 + 32;
//     }
//   }
  
//   const temp = new Temperature(25);
//   console.log(temp.celsius); // 25
//   console.log(temp.fahrenheit); // 77
  
//   temp.celsius = -300; // Temperature below absolute zero is not possible.
//   temp.celsius = 32;
//   console.log(temp.celsius); // 32
//   console.log(temp.fahrenheit); // 89.6



// class MathHelper {
//     static square(number) {
//       return number * number;
//     }
//   }
  
//   console.log(MathHelper.square(5)); // 25



  class Animal {
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Woof woof!");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("Meow!");
    }
  }
  
  function animalSound(animal) {
    animal.makeSound();
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  animalSound(dog); // Woof woof!
  animalSound(cat); // Meow!