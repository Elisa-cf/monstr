import { ref } from 'vue'
import { fetchCards, fetchCategories } from '../api/api'
import type { Card, Category } from '../types/interfaces'

/**
 * Composable function to manage cards and categories.
 * @returns {Object} An object containing cards, categories, and functions to load them.
 */
export function useCards() {
  const cards = ref<Card[]>([])
  const categories = ref<Category[]>([])

  /**
   * Loads cards from the API and updates the cards ref.
   * @returns {Promise<void>}
   */
  const loadCards = async (): Promise<void> => {
    try {
      const fetchedCards = await fetchCards()
      cards.value = fetchedCards
    } catch (error) {
      console.error('Error fetching cards:', error)
    }
  }

  /**
   * Loads categories from the API and updates the categories ref.
   * @returns {Promise<void>}
   */
  const loadCategories = async (): Promise<void> => {
    try {
      const fetchedCategories = await fetchCategories()
      categories.value = fetchedCategories
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  return {
    cards,
    categories,
    loadCards,
    loadCategories,
  }
}
