import React from 'react';

function ReturnButton({onClick}) {
  return <button type="click"
                 onClick={onClick}
                 className="border-2 border-blue-500 hover:bg-blue-100 text-black font-bold py-2 px-4 rounded transition-colors">Voltar</button>;
}

export default ReturnButton;
