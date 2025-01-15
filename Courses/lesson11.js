// console.log('Start')

// setTimeout(() => {
//     console.log('Timeout')
// }, 3000)

// function saySmth(phrase, name) {
//     console.log(`${phrase} ${name}!`);
//   }
  
//   setTimeout(saySmth, 1000, 'Hello', 'John');

// console.log('Finish')


// // Callback
// function asyncFunction(a, b, callback) {
// 	setTimeout(() => {
//         const result = a + b
//         callback(result)
//     }, 10000)
// };

// const t = asyncFunction(5, 8, result => {
//     console.log(result)
// })

// // Promise
// function asyncFunction1(a, b, callback) {
//     return new Promise ((result, reject) => {
// 	    setTimeout(() => {
//             const result = a + b
//             callback(result)
//         }, 1000)
//     })
// };

// const f = asyncFunction1(2, 9, result => {
//     console.log(result)
// })



// new Promise(resolve => resolve('fulfilled'))
//   .then(result => {
//     console.log(`then ${result}`);
//   })
//   .catch(error => {
//     console.log(`catch ${error}`);
//   })
//   .finally(() => {
//     console.log('finally');
//   })



async function fetchData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if(!response.ok) {
            throw new Error('Response is failed')
        }
        const data = await response.json()
        return data
    } catch(error) {
        console.error(`Error ${error}`)
    }
}

const data = await fetchData()
console.log(data)

await fetchData().then(data => {
    console.log(data)
}).catch(error => {
    console.log('Final catch', error.message)
})
console.log(data)