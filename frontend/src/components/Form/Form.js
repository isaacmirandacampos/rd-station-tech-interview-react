// Form.js

/**
 * @typedef {Object} FormValues
 * @property {string[]} selectedPreferences - The list of preferences related to the product.
 * @property {string[]} selectedFeatures - The list of features of the product.
 * @property {'SingleProduct' | 'MultipleProducts'} selectedRecommendationType - the number of recommendations
 */

/**
 * @typedef {'selectedPreferences' | 'selectedFeatures' | 'selectedRecommendationType'} KeyOfFields
 */

/**
 * Registers an error message for a specific key.
 * Updates the validationErrors object with the provided key and message.
 *
 * @callback RegisterError
 * @param {KeyOfFields} key - The key associated with the error (e.g., a field name).
 * @param {string} message - The error message to register.
 * @returns {void}
 */

import React from 'react';
import {Features, Preferences, RecommendationType} from './Fields';
import {SubmitButton} from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({applyRecommendations}) {
  const {preferences, features, products} = useProducts();


  const {getRecommendations} = useRecommendations(products);

  const onSubmit = (valuesReadyToConsume) => {
    const dataRecommendations = getRecommendations(valuesReadyToConsume);
    applyRecommendations(dataRecommendations)
  };

  /**
   * @typeof {FormValues} initialValues - The initial form state.
   */
  const initialValues = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  }
  /**
   * Registers an error message for a specific key.
   * Updates the validationErrors object with the provided key and message.
   * @param {FormValues} valuesToValidate - The key associated with the error (e.g., a field name).
   * @param {RegisterError} registerError - The error message to register.
   * @returns {void} This function does not return anything.
   */
  const validate = (valuesToValidate, registerError) => {
    if (!['SingleProduct', 'MultipleProducts'].includes(valuesToValidate.selectedRecommendationType)) {
      registerError('selectedRecommendationType', "Selecione a quantidade de recomendações visíveis que deseja")
    }
    if (!valuesToValidate.selectedFeatures.length > 0 && !valuesToValidate.selectedPreferences.length > 0) {
      registerError("selectedPreferences", "Selecione ao menos uma preferência")
      registerError("selectedFeatures", "Selecione ao menos uma funcionalidade")
    }
  }

  const {handleChange, handleSubmit, messageErrorIfDirty} = useForm(initialValues, validate, onSubmit);

  return (
    <form
      className="max-w-fit mx-auto p-2 md:w-full md:p-4 bg-white rounded-lg shadow-md md:h-[500px] "
      onSubmit={handleSubmit}
    >
      <div className="md:overflow-auto md:h-[400px] mb-2 w-full grid grid-cols-1 md:grid-cols-2">
        <Preferences
          preferences={preferences}
          messageError={messageErrorIfDirty('selectedPreferences')}
          onPreferenceChange={(selected) =>
            handleChange({selectedPreferences: selected})
          }
        />
        <Features
          features={features}
          messageError={messageErrorIfDirty('selectedFeatures')}
          onFeatureChange={(selected) =>
            handleChange({selectedFeatures: selected})
          }
        />
        <RecommendationType
          messageError={messageErrorIfDirty('selectedRecommendationType')}
          onRecommendationTypeChange={(selected) =>
            handleChange({selectedRecommendationType: selected})
          }
        />
      </div>
      <SubmitButton text="Obter recomendação"/>
    </form>
  );
}

export default Form;
