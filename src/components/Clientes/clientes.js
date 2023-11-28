import styled from 'styled-components';
import React from 'react';

const clients = [
  {
    name: 'Alice Johnson',
    profession: 'Designer Gráfica',
    feedback: 'Estou impressionada com os serviços do J&R Trust Bank. Eles sempre priorizam o cliente e oferecem soluções financeiras excepcionais.',
    image: '../../assets/mulher3.png',
  },
  {
    name: 'Bob Smith',
    profession: 'Empresário',
    feedback: 'O J&R Trust Bank me ajudou a expandir meus negócios de maneira incrível. Eles são confiáveis e competentes.',
    image: '../../assets/cara1.png',
  },
  {
    name: 'Eva Brown',
    profession: 'Estudante',
    feedback: 'Como estudante, confio no J&R Trust Bank para minhas finanças. Eles tornaram minha vida financeira muito mais fácil.',
    image: '../../assets/mulher2.png',
  },
];

const Body = styled.body`
  height: 100%;
  margin: 0;
  padding: 0;
  justify-content; center;
`;

const FeedbackPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), #800040);
  min-height: 100vh;
`;

const ClientesImages = styled.div`
  display: flex;
  flex-wrap: wrap; /* Adicionado para garantir que os clientes se ajustem em telas menores */
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ClientesImage = styled.div`
  text-align: center;
  width: 200px; /* Ajuste a largura conforme necessário para o layout responsivo */
  margin: 10px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
  object-fit: cover;
  border: 2px solid #333;
`;

const Title = styled.h2`
  color: white;
`;

const Name = styled.h3`
  font-size: 18px;
  color: white;
`;

const Texts = styled.p`
  font-size: 14px;
  margin: 5px 0;
  color: white;
`;

const ResponsiveClientesImage = styled(ClientesImage)`
  @media (max-width: 768px) {
    width: 100%; /* Ocupar 100% da largura em telas menores */
  }
`;

function Clientes() {
  return (
    <Body>
      <FeedbackPage>
        <Title> O que nossos clientes dizem </Title>
        <ClientesImages>
          {clients.map((client, index) => (
            <ResponsiveClientesImage key={index}>
              <Image src={client.image} alt={client.name} />
              <Name>{client.name}</Name>
              <Texts>{client.profession}</Texts>
              <Texts>{client.feedback}</Texts>
            </ResponsiveClientesImage>
          ))}
        </ClientesImages>
      </FeedbackPage>
    </Body>
  );
}

export default Clientes;
