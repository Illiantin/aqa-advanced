const axios = require('axios');

// Налаштування інтерсепторів для логування запитів і респонсів
const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

apiClient.interceptors.request.use(
    (config) => {
    console.log(`Request: ${config.method.toUpperCase()} ${config.url}`, config.data || '')
    return config
    }
);

apiClient.interceptors.response.use(
    (response) => {
        console.log(`Response: ${response.status} ${response.config.url}`, response.data)
    return response
    },
    (error) => {
        console.error(`Error: ${error.response?.status} ${error.config?.url}`, error.response?.data || '');
    return Promise.reject(error);
    }
);

describe ('API test', () => {
        test('REQUEST 1', async () => {
            const response = await apiClient.get('/todos/1')
            expect(response.status).toBe(200)
            expect(response.data).toHaveProperty('id', 1)
        })

        test('REQUEST 2', async () => {
            const response = await apiClient.get('/users/1')
            expect(response.status).toBe(200)
            expect(response.data).toHaveProperty('id', 1)
        })

        test('REQUEST 3', async () => {
            const newPost = {
                title: 'Lorem ipsum',
                userId: 1,
                body: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum non nostra vehicula, vulputate eu massa. Vel fermentum lobortis netus fames tempor faucibus gravida rutrum.',
            };

            const response = await apiClient.post('/posts', newPost)
            expect(response.status).toBe(201)
            expect(response.data).toMatchObject(newPost)
        })

        test('REQUEST 4', async () => {
            const response = await apiClient.get('/albums/1')
            expect(response.status).toBe(200)
            expect(Array.isArray(response.data)).toBe(true)
        })
        
        test('REQUEST 5', async () => {
            const newComment = {
                postId: 1,
                name: 'Test Comment',
                email: 'test@example.com',
                body: 'This is a test comment.',
            };

            const response = await apiClient.post('/comments', newComment)
            expect(response.status).toBe(201)
            expect(response.data).toMatchObject(newComment)
            expect(response.data).toHaveProperty('id')
        })
    })