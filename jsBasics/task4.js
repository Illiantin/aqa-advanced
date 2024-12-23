import chalk from 'chalk'
// TASK 1
function handleNum (num, evenCallback, oddCallback) {
    if (num % 2 !== 0) {
        oddCallback()
    } else {
        evenCallback()
    }
}

function handleEven() {
    console.log('number is even')
}

function handleOdd() {
    console.log('number is odd')
}

handleNum(7, handleEven, handleOdd)
handleNum(10, handleEven, handleOdd)


// TASK 2
function countDown (num) {
    console.log(num)
    if (num > 0) {
        countDown(num - 1)
    }
} 

countDown (4)


// TASK 3
function divide (numerator, denominator) {
    if (denominator === 0) {
        throw new Error(chalk.red('Denominator cannot be zero'))
    } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error(chalk.red('Both arguments must be numbers'))
    }
    return numerator / denominator
}
 
try {
    console.log(divide(5, 2))
 } catch (error) {
    console.error(error.message)
 } finally {
    console.log('The work is finished')
 }

 try {
    console.log(divide(4, 0))
 } catch (error) {
    console.error(error.message)
 } finally {
    console.log('The work is finished')
 }

 try {
    console.log(divide(4, 'number'))
 } catch (error) {
    console.error(error.message)
 } finally {
    console.log('The work is finished')
 }