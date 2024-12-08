import React, {useState} from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import {Wizard} from "./components/Wizard/Wizard";

function App() {
  const [step, setStep] = useState(1);

  const handleStepChange = (step) => {
    setStep(step);
  }
  const [recommendations, setRecommendations] = useState([])

  const applyRecommendations = (recommendations) => {
    handleStepChange(2)
    setRecommendations(recommendations);
  }

  const steps = [
    {
      step: 1,
      active: step === 1,
      children: <Form applyRecommendations={applyRecommendations}/>
    }, {
      step: 2,
      active: step === 2,
      children: <RecommendationList
        handleStepChange={() => handleStepChange(1)}
        recommendations={recommendations}
      />
    }
  ]

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Recomendador de Produtos RD Station</h1>
      <div
        className="flex flex-col items-center w-full relative">
        <div className="bg-white p-2 m-2 md:p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 mb-4">
          <p className="text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD
            Station, cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de
            Conversas a Inteligência Artificial, temos uma solução para ajudar você a alcançar seus objetivos. Use o
            formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações
            personalizadas de produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <Wizard steps={steps}/>
      </div>
    </div>
  );
}


export default App;
