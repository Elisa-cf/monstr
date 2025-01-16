import { ref } from 'vue'
import { fetchCards, fetchCategories } from '../api/api'
import type { Card, Category } from '../types/interfaces'

export const cards = ref<Card[]>([])
export const categories = ref<Category[]>([])

export const loadCards = async () => {
  try {
    const fetchedCards = await fetchCards()
    console.log('Fetched Cards:', fetchedCards)
    cards.value = fetchedCards
  } catch (error) {
    console.error('Error fetching cards:', error)
  }
}

export const loadCategories = async () => {
  try {
    const fetchedCategories = await fetchCategories()
    console.log('Fetched Categories:', fetchedCategories)
    categories.value = fetchedCategories
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}
