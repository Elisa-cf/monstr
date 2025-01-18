/**
 * This file contains TypeScript interfaces used throughout the application.
 * These interfaces define the structure of various objects such as cards, categories, and filter parameters.
 */

export interface Card {
  id: string
  name: string
  icon: string
  category: string
}

export interface Category {
  id: string
  title: string
}

export interface FilterParams {
  searchQuery: string
  selectedCategory: string
  selectedSortBy: string
}
