/**
 * Loads data from local storage.
 * @template T - The type of the data to load.
 * @param {string} key - The key under which the data is stored in local storage.
 * @param {T} defaultValue - The default value to return if no data is found.
 * @returns {T} The data loaded from local storage, or the default value if no data is found.
 */
export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const savedData = localStorage.getItem(key)
  return savedData ? (JSON.parse(savedData) as T) : defaultValue
}

/**
 * Saves data to local storage.
 * @template T - The type of the data to save.
 * @param {string} key - The key under which to store the data in local storage.
 * @param {T} data - The data to store in local storage.
 */
export const saveToLocalStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data))
}
