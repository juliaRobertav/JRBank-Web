import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Saldo = () => {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    const fetchContas = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api_cliente/');
        setContas(response.data);
      } catch (error) {
        console.error('Erro ao buscar contas:', error);
      }
    };

    fetchContas();
  }, []);

  return (
    <div>
      <h1>Saldo das Contas</h1>
      <ul>
        {contas.map((cliente) => (
          <li key={cliente.id}>
            {`${cliente.agencia}/${cliente.conta}: ${cliente.saldo}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Saldo;
