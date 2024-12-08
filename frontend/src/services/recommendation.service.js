// getRecommendations.js

/**
 * @typedef {Object} Product
 * @property {number} id - The unique identifier for the product.
 * @property {string} name - The name of the product.
 * @property {string} category - The category the product belongs to.
 * @property {string[]} preferences - The list of preferences related to the product.
 * @property {string[]} features - The list of features of the product.
 */

/**
 * @typedef {Object} FormData
 * @property {string[] | undefined} selectedPreferences - The list of preferences related to the product.
 * @property {string[] | undefined} selectedFeatures - The list of features of the product.
 * @property {'SingleProduct' | 'MultipleProducts'} selectedRecommendationType - the number of recommendations
 */

/**
 * @param {FormData} formData - Form data containing selected preferences and features.
 * @param {Array<Product>} products - List of products to filter and recommend.
 */
const getRecommendations = (
  formData = {selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: 'MultipleProducts'},
  products
) => {
  /** @type {Array<Product>} */
  const recommendations = []
  if (formData.selectedRecommendationType === 'MultipleProducts') {
    for (const product of products) {
      const score = getScoreOfMatching(product, formData.selectedFeatures, formData.selectedPreferences)
      if (score > 0) {
        recommendations.push(product)
      }
    }
  }

  if (formData.selectedRecommendationType === 'SingleProduct') {
    let filtered = {
      score: 0,
      product: null,
    }
    for (const product of products) {
      const score = getScoreOfMatching(product, formData.selectedFeatures, formData.selectedPreferences)
      if (score > 0 && score >= filtered.score) {
        filtered = {
          score,
          product,
        }
      }
    }
    recommendations.push(filtered.product)
  }

  return recommendations
};

/**
 * @param {Product} product - List of products to filter and recommend.
 * @param {string[]} features
 * @param {string[]} preferences
 * @returns {number}
 */

const getScoreOfMatching = (product, features = [], preferences = []) => {
  const featureMatches = product.features.filter(feature => features.includes(feature)).length;

  const preferenceMatches = product.preferences.filter(preference => preferences.includes(preference)).length;

  return featureMatches + preferenceMatches
}


export {getRecommendations};
