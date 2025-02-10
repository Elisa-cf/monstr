import axios from 'axios'

/**
 * Create an instance of Axios with a base URL pointing to the API server.
 */
const axiosInstance = axios.create({
  baseURL: '/api',
})

/**
 * Fetches the list of cards from the API.
 * @returns {Promise<any>} A promise that resolves to the list of cards.
 * @throws Will throw an error if the request fails.
 */
export async function fetchCards() {
  try {
    const response = await axiosInstance.get('/cards')
    return response.data
  } catch (error) {
    console.error('Failed to fetch cards:', error)
    throw new Error('Failed to fetch cards')
  }
}

/**
 * Fetches the list of categories from the API.
 * @returns {Promise<any>} A promise that resolves to the list of categories.
 * @throws Will throw an error if the request fails.
 */
export async function fetchCategories() {
  try {
    const response = await axiosInstance.get('/categories')
    return response.data
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    throw new Error('Failed to fetch categories')
  }
}
