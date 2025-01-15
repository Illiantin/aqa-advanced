// const arr = [1,2,3,4 [5,6,7]]
// const arr2 = new Array(1,2,3,4)

// console.log(arr)
// console.log(arr2)


// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i])
// }
// console.log('-----------------------')

// for(const num of arr2) {
//     console.log(num)
// }


// let a = 10
// let b = a
// a = 20

// console.log(a)
// console.log(b)


// let a = 10
// let b = a
// a = JSON.parse(JSON.stringify(arr))
// arr2.push(50)

// console.log(a)
// console.log(b)


// const sentence = "Це речення має кілька слів";
// console.log(sentence[6])
// const words = sentence.split(" ");
// console.log(words); 

// const fruits = ["яблуко", "банан", "полуниця"];
// const fruitString = fruits.join(", ");
// console.log(fruitString);


// const numbers = [10, 20, 30, 40, 50];
// const index = numbers.indexOf(30);
// console.log(index);

// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("зелений");
// console.log(hasGreen)


// const stack = [1, 2];
// stack.push(3, 4);
// stack.pop();
// stack.shift()
// console.log(stack);

// const queue = ["B", "C"];
// queue.unshift("A");
// console.log(queue);


// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(2);

// const str = 'Test'
// const str2 = str.slice(1)

// console.log(slicedArray)
// console.log(str2)


// const colors = ["червоний", "зелений", "синій"];
// colors.splice(0, 0, "жовтий", "оранжевий");
// console.log(colors);


// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray);



// const arr = [1,2,3,4]
// // arr.forEach((num) => console.log(num))


// const arrOdd = arr.filter((num) => num % 2 === 0)
// const arrEven = arr.filter((num) => num % 2 !== 0)
// console.log(arrOdd)
// console.log(arrEven)


// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);
// console.log(firstEvenNumber)


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers)

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flatArray = nestedArray.flat();
// console.log(flatArray)



// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months); 


// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum)


// const numbers = [2, 4, 6, 7, 10];
// const allEvenNumbers = numbers.every((number) => number % 2 === 0);
// console.log(allEvenNumbers)


// const originalArray1 = [1, 2, 3, 4, 5];
// const copiedArray1 = [].concat(originalArray1);
// console.log(copiedArray1)

// const originalArray2 = [1, 2, 3, 4, 5, 6];
// const copiedArray2 = [...originalArray2];
// console.log(copiedArray2)

// const originalArray3 = [1, 2, 3, 4, 5];
// const copiedArray3 = originalArray3.slice()
// console.log(copiedArray3)


const set = new Set(); // Порожній об'єкт Set
const setFromArray = new Set([1, 2, 3, 3, 4, 4, 5]); // Створення з масиву
setFromArray.delete(3)
console.log(setFromArray)