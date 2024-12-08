import React from 'react';
import ReturnButton from "../Wizard/ReturnButton";
import {ProductCard} from "./ProductCard";

/**
 * @typedef {Object} Product
 * @property {number} id - The unique identifier for the product.
 * @property {string} name - The name of the product.
 * @property {string} category - The category the product belongs to.
 * @property {string[]} preferences - The list of preferences related to the product.
 * @property {string[]} features - The list of features of the product.
 */

/**
 * @param {Product[]} recommendations
 * @param {Function} handleStepChange
 */
function RecommendationList({recommendations, handleStepChange}) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="h-[400px] mb-2 overflow-auto px-2">
        <h2 className="text-2xl font-bold mb-4">Lista de Recomendações:</h2>
        {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}
        <ul>
          {recommendations.map((recommendation) => (
            <ProductCard key={recommendation.id} product={recommendation}/>
          ))}
        </ul>
      </div>
      <ReturnButton onClick={handleStepChange}>voltar</ReturnButton>
    </div>
  );
}

export default RecommendationList;
