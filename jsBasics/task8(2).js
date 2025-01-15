function fetchTodo() {
    return fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if(!response.ok){
            throw new Error('Failed to fetch todo')
        }
        return response.json()
    })
}

function fetchUser () {
    return fetch ('https://jsonplaceholder.typicode.com/users/1')
    .then (response => {
        if (!response.ok) {
            throw new Error ('Failed to fetch user')
        return response.json()
        }
    })
}

Promise.all ([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Promise.all results:', { todo, user })
    })
    .catch(error => {
        console.error('Error in Promise.all:', error)
    })

Promise.race ([fetchTodo(), fetchUser()])
    .then (result => {
        console.log('Error in Promise.race:', result)
    })
    .catch(error => {
        console.error('Error in Promise.race:', error)
    })
