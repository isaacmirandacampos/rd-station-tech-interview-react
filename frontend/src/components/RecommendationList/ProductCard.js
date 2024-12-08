import React from "react";

/**
 * @typedef {Object} Product
 * @property {number} id - The unique identifier for the product.
 * @property {string} name - The name of the product.
 * @property {string} category - The category the product belongs to.
 * @property {string[]} preferences - The list of preferences related to the product.
 * @property {string[]} features - The list of features of the product.
 */


/**
 * @param {Product} product
 */
export const ProductCard = ({product}) => {
  return (
    <li
      className="border-2 p-2 my-2 block list-none bg-white hover:bg-blue-100 hover:border-blue-200 transition-colors duration-500">
      <strong className="text-[1.25rem]">{product.name}</strong>
      <div><strong>Categoria:</strong> {product.category}</div>
      <div className="my-2">
        <strong>Funcionalidades: </strong>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="my-2">
        <strong>Preferências: </strong>
        <ul>
          {product.preferences.map((preference) => (
            <li key={preference}>{preference}</li>
          ))}
        </ul>
      </div>
    </li>)
}
