/**
 * Generates the image source URL based on the card ID.
 * @param {string} id - The ID of the card.
 * @returns {string} The URL of the generated image.
 */
export const getImageSrc = (id: string): string => {
  return `https://robohash.org/${id}.png?set=set2&size=200x200`
}
