import React from 'react';
import Checkbox from '../../shared/Checkbox';
import {RequiredStep} from "./RequiredStep";
import {ErrorMessage} from "./ErrorMessage";

function RecommendationType({onRecommendationTypeChange, messageError}) {
  return (<div className="mb-4">
    <h2 className="text-lg font-bold mb-2">Tipo de Recomendação: <RequiredStep/></h2>
    <ErrorMessage>{messageError}</ErrorMessage>
    <div className="flex items-center gap-2">
      <Checkbox
        type="radio"
        name="recommendationType"
        value="SingleProduct"
        onChange={() => onRecommendationTypeChange('SingleProduct')}
      >Produto Único</Checkbox>
      <Checkbox
        type="radio"
        name="recommendationType"
        value="MultipleProducts"
        onChange={() => onRecommendationTypeChange('MultipleProducts')}
      >Múltiplos Produtos</Checkbox>
    </div>
  </div>);
}

export default RecommendationType;
