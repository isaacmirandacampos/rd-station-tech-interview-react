// useForm.js
import {useState} from 'react';


/**
 * @template T
 * @param {T} initialState - Form data containing selected preferences and features.
 * @param {Function} validate - Validate values before submit.
 * @param {Function} onSubmit - Submit Form.
 */

const useForm = (initialState, validate, onSubmit) => {
  const [values, setValues] = useState(initialState);
  const [dirtyKeys, setDirtyKeys] = useState({});
  const [errors, setErrors] = useState(() =>
    runValidation(initialState),
  );

  function runValidation(valuesToValidate) {
    const validationErrors = {any: false, messages: {}};
    const registerError = (key, message) => {
      if (!validationErrors.any) validationErrors.any = true;
      validationErrors.messages[key] = validationErrors.messages[key]
        ? `${validationErrors.messages[key]}, ${message}`
        : message;
    };
    if (validate) validate(valuesToValidate, registerError);
    return validationErrors;
  }


  const allKeysDirty = (x) => {
    const result = {};
    Object.keys(x).forEach(key => {
      result[key] = 1;
    });
    return result;
  };

  /**
   * @template T
   * @param {T} patch - Form data containing selected preferences and features.
   */
  const handleChange = (patch) => {
    const newValues = {...values, ...patch};
    setValues(newValues);
    setErrors(runValidation(newValues));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.any) {
      setDirtyKeys(allKeysDirty(values));
      return;
    }
    const submissionNavigationResult = await onSubmit(values);
    if (submissionNavigationResult === 'screen-still-alive') {
      setDirtyKeys({});
    }
  };

  /**
   * @param {Array<string> | string} key - The field name that will get message error.
   */
  const messageErrorIfDirty = (key) => {
    if (dirtyKeys[key] === 1) {
      return errors.messages[key];
    } else {
      return undefined;
    }
  };


  return {values, handleSubmit, handleChange, messageErrorIfDirty};
};

export default useForm;
