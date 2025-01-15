// function calbackFunction(name, calback) {
//     console.log(name)
//     calback()
// }

// function newFunction () {
//     console.log('New function')
// }

// calbackFunction("First", newFunction)


// const arr = [1, 2, 3, 4, 5]

// console.log(arr.map((num => num * 2)))



// const newObj = {
//     name: 'Test',
//     newFunction: function() {
//         console.log(this.name)
//     }
// }

// newObj.newFunction()




// function newFunction(name) {
//     this.name = name
//     this.print = function() {
//         console.log(`This name = ${this.name}`)
//     }
// }

// const newEx = new newFunction('Test')
// newEx.print()


// let name = 'test2'
// const newObj = {
//     name: 'Test',
//     newFunction: () => {
//         console.log(this.name)
//     }
// }

// const secondObj = {name: 'New'}
// newObj.newFunction.call(secondObj)



// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// numbers.forEach(num => console.log(num));



const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    // Стрілочна функція не має власного контексту this, вона використовує контекст зовнішнього об'єкту (person)
    printName: function() {
      setTimeout(() => {
        console.log(this.fullName());
      }, 1000);
    }
  };
  
  person.printName(); // Виведе "John Doe" після затримки 1 секунда



//   function newFunction() {
//     let name = 'test'

//     function printName() {
//         console.log(name)
//     }

//     return printName
//   }

//   const newname = newFunction()
//   newname()



// function sumArray(arr, index) {
//     if (index < 0) {
//         return 0
//     } else {
//         return arr[index] + sumArray(arr, index - 1)
//     }
// }

// const numbers = [1, 2, 3, 4, 5]
// const totalSum = sumArray(numbers, numbers.length - 1)
// console.log(totalSum)