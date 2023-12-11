import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    // Substitua 'sua-api-aqui' pela URL real da sua API
    axios.get('sua-api-aqui/endpoint-do-saldo')
      .then(response => {
        setSaldo(response.data.saldo);
      })
      .catch(error => {
        console.error('Erro ao obter saldo:', error);
      });
  }, []);

  return (
    <div>
      <h1>Saldo do Cliente</h1>
      {saldo !== null ? (
        <p>O saldo atual do cliente é: R$ {saldo.toFixed(2)}</p>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default App
