// Preferences.js

import React, {useState} from 'react';
import Checkbox from '../../shared/Checkbox';
import {ErrorMessage} from "./ErrorMessage";

function Preferences({
                       preferences,
                       messageError,
                       selectedPreferences = [],
                       onPreferenceChange,
                     }) {
  const [currentPreferences, setCurrentPreferences] = useState(selectedPreferences)

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Preferências:</h2>
      <ErrorMessage>{messageError}</ErrorMessage>
      <ul>
        {preferences.map((preference) => (
          <li key={preference} className="mb-2">
            <Checkbox
              value={preference}
              checked={currentPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
              className="text-blue-500"
            >
              {preference}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
