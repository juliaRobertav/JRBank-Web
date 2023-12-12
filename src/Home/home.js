import React from 'react';
import styled from 'styled-components';

// styled componentes
// const de estilização para responsividade
const ResponsiveContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), #800040);
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  background: linear-gradient(to bottom, #500020, #000);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 36px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
`;

const Frase = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
`;

const Home = () => {
  return (
    // conteiners
    <ResponsiveContainer>
      <Title>J&R Trust Bank</Title>
      <Frase>“Construindo confiança, gerando sucesso!”</Frase>
      <Image src={`${process.env.PUBLIC_URL}/assets/cartaoGif2.gif`} />
    </ResponsiveContainer>
  );
};

export default Home;
