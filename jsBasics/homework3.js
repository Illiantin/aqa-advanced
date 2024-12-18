// TASK 1.1

function test1 (width, height) {
    return width * height
}
console.log(test1(5, 10))


// TASK 1.2

const test2 = function (width, height) {
    return width * height
}
console.log(test1(4, 12))


// TASK 1.3

const test3 = (width, height) => {
    return width * height
}
console.log(test1(6, 17))


// TASK 2

const isAdult = (age) => {
    return age >= 18
}
console.log(isAdult(18))
console.log(isAdult(17))


// TASK 3

import chalk from 'chalk'
function checkOrder (available, ordered) {
    if (available < ordered) {
        return (chalk.red ('Your order is too large, we donʼt have enough goods'))
    } else if (ordered === 0) {
        return ('Your order is empty')
    } else if (available >= ordered) {
        return (chalk.green ('Your order is accepted'))
    }
}

console.log(checkOrder(100, 150))
console.log(checkOrder(100, 0))
console.log(checkOrder(100, 50))
