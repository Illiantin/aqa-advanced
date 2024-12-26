// TASK 1
const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
let positiveCount = 0
let negativeCount = 0
let zeroCount = 0
for (let num of numbers) {
    if (num > 0) {
        positiveCount++
    } else if (num < 0) {
        negativeCount++
    } else if (num === 0) {
        zeroCount++
    }
}
console.log(`Positive numbers: ${positiveCount}`)
console.log(`Negative numbers: ${negativeCount}`)
console.log(`Zero numbers: ${zeroCount}`)


// TASK 2
const numbers2 = [1, 2, 3, 4, 5]
const mutatedArray = numbers2.map((num, index) => num * index)
console.log ('Mutated array:', mutatedArray)


// TASK 3
const initialArray = [10, 20, 30, 40, 50]
const sum = initialArray.reduce((acc, curr) => acc + curr, 0)
console.log('Total sum:', sum)


// TASK 4
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = array.filter((num) => num % 2 === 0)
console.log('Even numbers:', evenNumbers)


// TASK 5
const firstArray = [1, 2, 3]
const secondArray = [4, 5, 6]
const concatArray = firstArray.concat(secondArray)
console.log('Concatenated array:', concatArray)


// TASK 5 bonus
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]
console.log('Combined array:', combinedArray)


// TASK 6
const numbersList = [1,10,14,2,4,5,43,34]
const numbersListCopy = [...numbersList].sort((a, b) => a - b)
console.log("Original Array:", numbersList)
console.log("Sorted Array:", numbersListCopy)