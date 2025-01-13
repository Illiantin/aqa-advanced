async function fetchTodo() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if(!response.ok){
            throw new Error('Failed to fetch todo')
        }
        return response.json()
    })
}

async function fetchUser () {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
    .then (response => {
        if (!response.ok) {
            throw new Error ('Failed to fetch user')
        return response.json()
        }
    })
}

(async function handleRequests() {
    try {
        const [todo, user] = await Promise.all ([fetchTodo(), fetchUser()])
        console.log('Async/Await Promise.all results:', { todo, user })
    }
    catch(error) {
        console.error('Error in Async/Await Promise.all:', error)
    }

    try {
        const result = await Promise.race([fetchTodoAsync(), fetchUserAsync()])
        console.log('Async/Await Promise.race result:', result)
    } catch (error) {
        console.error('Error in Async/Await Promise.race:', error)
    }
})
