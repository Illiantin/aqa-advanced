class TodoFetcher {
    static async fetchTodo() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Failed to fetch todo');
        }
        return response.json()
    }
}

class UserFetcher {
    static async fetchUser() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    }
}

(async function classBasedRequests() {
    try {
        const [todo, user] = await Promise.all([TodoFetcher.fetchTodo(), UserFetcher.fetchUser()]);
        console.log('Class-based Async/Await Promise.all results:', { todo, user });
    } catch (error) {
        console.error('Error in class-based Async/Await Promise.all:', error);
    }

    try {
        const result = await Promise.race([TodoFetcher.fetchTodo(), UserFetcher.fetchUser()]);
        console.log('Class-based Async/Await Promise.race result:', result);
    } catch (error) {
        console.error('Error in class-based Async/Await Promise.race:', error);
    }
})