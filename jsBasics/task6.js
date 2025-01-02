// TASK 1
const student = {
    firstName: "Jervonta",
    lastName: "Davis",
    age: '27',
    courses: ['English', 'Math', 'History']
}
console.log(student)


// TASK 2
const book = {
    title: 'Can`t hurt me',
    author: 'David Goggins',
    year: 2022
}
const { title, author } = book
console.log('Title:', title)
console.log('Author:', author)


// TASK 3
const car1 = {
    brand: 'Toyota',
    model: 'Tundra',
    year: '2023'
}

const car2 = {
    brand: 'Honda',
    model: 'Civic',
    owner: 'Alex Pereira'
}

const car3 = {...car1, ...car2}

console.log(car3)


// TASK 4
const person = {
    firstName: 'Jon',
    nickname: 'Bones',
    lastName: 'Jones',
    age: 37
}
person.email = 'BonesMMA@icloud.com'
delete person.age

console.log(person)


// TASK 5
const users = [
    {name: 'Leon', surname: 'Edwards', weightClass: 'welterweight'},
    {name: 'Ilia', surname: 'Topuria', weightClass: 'featherweight'},
    {name: 'Charles', surname: 'Oliveira', weightClass: 'lightweight'}
]
 for (const user of users) {
    const {name, surname, weightClass} = user
        if (surname === 'Topuria') {
            console.log(`His name is ${name} ${surname} and he is undisputed UFC ${weightClass} champion of the world`)
        } else {
            console.log(`His name is ${name} ${surname} and he is fighting in ${weightClass} division`)
        }
 }

