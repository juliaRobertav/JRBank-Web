import React from 'react';

const Service = () => {

  // styled components
  const backgroundStyle = {
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), #800040)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '20px',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Permite a quebra de linha quando não há espaço suficiente
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    marginBottom: '20px', // Adicionado espaçamento entre os cards
  };

  const cardImageStyle = {
    width: '100px',
    height: '100px',
  };

  const textStyle = {
    color: 'black',
  };

  const breakpoints = {
    small: '600px',
    medium: '768px',
    large: '1024px',
  };

  // feito para responsividade
  const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = `@media (max-width: ${breakpoints[label]})`;
    return acc;
  }, {});

  return (
    <div style={backgroundStyle}>
      <h1>Nossos Serviços</h1>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <img src={`${process.env.PUBLIC_URL}/assets/emprestimo.png`} alt="Serviço 1" style={cardImageStyle} />
          <h2 style={textStyle}>Empréstimos</h2>
        </div>
        <div style={cardStyle}>
          <img src={`${process.env.PUBLIC_URL}/assets/transferencia.png`} alt="Serviço 2" style={cardImageStyle} />
          <h2 style={textStyle}>Transferências</h2>
        </div>
        <div style={cardStyle}>
          <img src={`${process.env.PUBLIC_URL}/assets/pagamento.png`} alt="Serviço 3" style={cardImageStyle} />
          <h2 style={textStyle}>Pagamentos</h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
