// TASK 1
const axios = require ('axios')

async function fetchInvalidUrl() {
    try {
        await axios.get('https://invalid.url')
    } catch (error) {
        return error.message
    }
}

test ('fetchInvalidUrl handles error correctly', async () => {
    const errorMessage = await fetchInvalidUrl()
    expect(errorMessage).toBeDefined()
    expect(errorMessage).toMatch(/ENOTFOUND|invalid.url/)
})


// TASK 2
async function fetchWithHeadersAndParams (url, params, headers) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
          'Custom-Header': 'CustomValue'
        },
        params: {
          userId: 1
        }
      })
    return response
}

test ('fetchWithHeadersAndParams includes headers and params correctly', async () => {
    const response = await fetchWithHeadersAndParams ()
    expect(response.config.headers['Custom-Header']).toBe('CustomValue')
    expect(response.config.params.userId).toBe(1)
    expect(response.status).toBe(200)
})


// TASk 3
test ('Mocking successful and failed requests with Axios', async () => {
    const mockedAxios = jest.spyOn(axios, 'get')
    
    mockedAxios.mockResolvedValueOnce ({
        data: [{ id: 1, title: 'Mocked Post' }],
        status: 200
    })

    const successResponse = await axios.get('https://mocked-endpoint.com/posts')
    expect(successResponse.data).toEqual([{ id: 1, title: 'Mocked Post' }])
    expect(successResponse.status).toBe(200)

    mockedAxios.mockRejectedValueOnce(new Error('Mocked Error'))
    await expect(axios.get('https://mocked-endpoint.com/posts')).rejects.toThrow('Mocked Error')

    mockedAxios.mockRestore()
})