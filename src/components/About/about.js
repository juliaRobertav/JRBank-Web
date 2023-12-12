import React from 'react';
import styled, { css } from 'styled-components';

const AboutUs = () => {

  /* estilização dos componentes 
  No styled Components, é feita a estilização além de ser definido o tipo (body por exemplo)*/
  const About = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), #800040);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;

  const Column = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
    max-width: 600px;
    width: 100%;
  `;

  const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
  `;

  const Text = styled.p`
    margin-bottom: 20px;
    font-size: 16px;
  `;

  const Image = styled.img`
    max-width: 30%;
    height: auto;
    margin: 20px 0;
    border-radius: 10px;
  `;

  // Adicionando media queries
  const breakpoints = {
    small: '600px',
    medium: '768px',
    large: '1024px',
  };

  // const para responsividade
  const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {});

  const ResponsiveAbout = styled(About)`
    ${media.medium`
      flex-direction: column;
      text-align: left;
    `}
  `;

  return (
    // componentes baseados nos styleds components
    <ResponsiveAbout>
      <Column>
        <Title>Nossa Missão</Title>
        <Text>
          No J&R Trust Bank, nossa missão é muito mais do que apenas fornecer serviços bancários.
          Somos uma instituição financeira comprometida em construir relacionamentos sólidos com nossos clientes e,
          assim, contribuir para o seu sucesso financeiro.
          Com uma história de excelência e inovação, somos a escolha preferida de indivíduos e
          empresas que buscam estabilidade, confiança e crescimento em suas vidas financeiras.
        </Text>
      </Column>

      <Column>
        <Title>Nossa Fundação</Title>
        <Text>
          Nossa fundação repousa sobre os pilares da integridade, responsabilidade e confiabilidade.
          Entendemos que a gestão cuidadosa do seu dinheiro é fundamental para a realização de seus objetivos,
          e é por isso que colocamos a confiança no centro de tudo o que fazemos. Acreditamos que a confiança é conquistada, não dada,
          e trabalhamos incansavelmente para ganhar a confiança de nossos clientes a cada dia.
        </Text>
      </Column>

      <Image src={`${process.env.PUBLIC_URL}/assets/logo4.png`} alt="Imagem 1" />
    </ResponsiveAbout>
  );
};

export default AboutUs;
