import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Saldo = () => {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api_cliente/')
      .then(response => {
        setContas(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter saldo:', error);
      });
  }, []);

  return (
    <div>
      <h1>Saldo das Contas</h1>
      {contas.length > 0 ? (
        <ul>
          {contas.map(conta => (
            <li key={conta.id}>
              Nome do Cliente: {conta.cliente} | Saldo Atual: R$ {conta.saldo.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Saldo;
