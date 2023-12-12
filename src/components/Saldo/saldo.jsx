// Saldo.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Saldo = () => {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api_cliente/') 
      .then(response => {
        setSaldo(response.data.saldo);
      })
      .catch(error => {
        console.error('Erro ao obter saldo:', error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: 'pink', padding: '20px', borderRadius: '10px', maxWidth: '300px', margin: 'auto', marginTop: '50px' }}>
      <h1 style={{ color: 'white' }}>Saldo Atual</h1>
      <p style={{ color: 'white', fontSize: '24px' }}>R$ {saldo.toFixed(2)}</p>
    </div>
  );
};

export default Saldo;
