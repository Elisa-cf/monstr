import { createServer } from 'miragejs'
import cardsJson from './cards.json'
import categoriesJson from './categories.json'

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    routes() {
      this.namespace = 'api'
      this.timing = 400

      // "api/cards"
      this.get('/cards', () => {
        return cardsJson
      })

      // "api/categories"
      this.get('/categories', () => {
        return categoriesJson
      })

      this.passthrough()
    },
  })

  return server
}
