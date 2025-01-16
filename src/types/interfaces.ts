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
