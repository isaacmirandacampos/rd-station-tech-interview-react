import React, {useState} from 'react';
import Checkbox from '../../shared/Checkbox';
import {ErrorMessage} from "./ErrorMessage";

function Features({features, messageError, selectedFeatures = [], onFeatureChange}) {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures)

  const handleFeatureChange = (feature) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">
        Funcionalidades:
      </h2>
      <ErrorMessage>{messageError}</ErrorMessage>
      <ul>
        {features.map((feature) => (
          <li key={feature} className="mb-2">
            <Checkbox
              value={feature}
              checked={currentFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="text-green-500"
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
