// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });




const { default: axios } = require("axios")
const {before} = require("mocha")

const url = 'https://jsonplaceholder.typicode.com/users/'

describe('First API test', () => {
  test('test', async () => {
    const response = await axios.get(url)
    console.log(response.data)
    expect(response.status).toBe(200)
    expect(response.data[0].id).toBeDefined()
    
    const response2 = await axios.post(url,
    {
      id: 11,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: { lat: '-37.3159', lng: '81.1496' }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    })
    expect(response2.status).toBe(201)
    console.log(response2)
  })
})