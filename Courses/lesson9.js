// const newObj1 = {
//     name: 'Alex',
//     newObj: {
//         name2: 'Jack',
//         newMethod: function() {
//             console.log(this.name2)
//         }
//     }
// };
// console.log(newObj1['newObj']['name2'])
// console.log(newObj1.newObj.name2)




// const newObj2 = new Object();




// function newObj(name) {
//     this.name = name
// };




// const newObj3 = new newObj('Name');




// const newObj4 = {
//     newMethod: function() {
//         console.log(this.name)
//     }
// }




// const newObj5 = Object.create(newObj4)
// newObj5.name = 'John'
// newObj5.newMethod()



// let name  = 'Test'
// const newObj = {
//     name: name
// }

// console.log(newObj)



// const prop = "age";
// const person = {
//   [prop]: 28
// };
// console.log(person.age);



// const person = {
//     age: 28,
//     name: 'Jerk',
//     name2: 'Balkan'
// };
// console.log(person.age)
// console.log(person.name2 ?? 'Default name')



// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };

// // Без оператора опціонального доступу
// const city = user && user.address && user.address.city;

// // З оператором опціонального доступу
// const cityOptional = user?.address?.city;

// console.log(city); // "New York"
// console.log(cityOptional); // "New York"

// // А тепер спробуємо звернутися до неіснуючої властивості
// console.log(user.phones.mobile); // Помилка : TypeError: Cannot read properties of undefined (reading 'mobile')
// console.log(user.phones?.mobile); // undefined



// const newObj = {
//     name: "Vitalik",
//     surname: 'Testirovshik',
//     age: 20
// }

// for(let key in newObj) {
//     console.log(key + ' - ' + newObj[key])
// }

// const keys = Object.keys(newObj);
// const value = Object.values(newObj);
// const entriesArr = Object.entries(newObj)

// console.log(keys)
// console.log(value)
// console.log(entriesArr)



// const objArr = [
//     {name: 'Bob'},
//     {name: 'David'}
// ]

// objArr.push({name: 'Dwayne'})
// objArr.push(12)
// objArr[0]. name2 = 'New name'
// console.log(objArr[0].name)
// console.log(objArr)



// const newObj = {
//     name: 'test',
//     surname: 'test2'
// }

// const {name, surname, age = '18'} = newObj

// console.log(name)
// console.log(surname)
// console.log(age)



// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 }
//   ];
  
//   for (const { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
//   }



//   const person = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "New York",
//       country: "USA"
//     }
//   };
  
//   const { name, address: { city, country } } = person;
  
//   console.log(name); // "John"
//   console.log(city); // "New York"
//   console.log(country); // "USA"



// const newArr = [1, 3, 5, 7]
// const [first, , third, last] = newArr

// console.log(first)
// console.log(third)

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);



// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]



// const originalObject1 = { name: 'John', age: 30 };
// const copiedObjec1 = { ...originalObject };

// const originalObject2 = { name: 'John', age: 30 };
// const copiedObject2 = Object.assign({}, originalObject);



const myMap = new Map();
myMap.set('key1', 'value1');
console.log(myMap.get(1))