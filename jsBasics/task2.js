//TASK 1

let avgGrade = 70
if (avgGrade < 60) {
    console.log('Незадовільно')
} else if (avgGrade >= 60 && avgGrade <= 70) {
    console.log('Задовільно')
} else if (avgGrade >= 71 && avgGrade <= 80) {
    console.log('Добре')
} else if (avgGrade >= 81 && avgGrade <= 90) {
    console.log('Дуже добре')
} else if (avgGrade >= 91 && avgGrade <= 100) {
    console.log('Відмінно')
} 

//TASK 2

import chalk from 'chalk';
let maxGrade = 'twenty five'
switch (true) {
    case maxGrade < 60:
        console.log('Незадовільно')
    break;
    case maxGrade >= 60 && maxGrade <= 70:
        console.log('Задовільно')
    break;
    case maxGrade >= 71 && maxGrade <= 80:
        console.log('Добре')
    break; 
    case maxGrade >= 81 && maxGrade <= 90:
        console.log('Дуже добре')
    break;
    case maxGrade >= 91 && maxGrade <= 100:
        console.log('Відмінно')
    break;
    default:
        console.log(chalk.red('Оцінка повинна мати числове значення від 0 до 100'))
}

//TASK 3

const num = 8
console.log(`Таблиця множення на ${num} (використовуючи for):`)
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}

console.log(`Таблиця множення на ${num} (використовуючи while):`)
let i = 1
while (i <= 10) {
    console.log(`${num} * ${i} = ${num * i}`)
    i++
}

