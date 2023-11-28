import styled, { css } from "styled-components";

const AboutService = () => {
    const ServicePage = styled.div`
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), #800040);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        min-height: 100vh;
    `;

    const TextDiv = styled.div`
        flex: 1;
        padding: 20px;
        color: white;
        text-align: center; /* Adicionado para centralizar o conteúdo */
    `;

    const Title = styled.h2`
        font-size: 24px;
        background-color: linear-gradient(to right, #2b2bb9, #2459eb);
    `;

    const SubTitle = styled.h3`
        font-size: 20px;
    `;
    const Texts = styled.p`
        font-size: 15px;
    `;

    const Image = styled.img`
        flex: 1;
        max-width: 75%;
        border-radius: 20%;
        margin: auto; /* Adicionado para centralizar a imagem */
        display: block; /* Remove o espaço extra abaixo da imagem */
    `;

    const MiniText = styled.h3`
        font-size: 14px;
        margin-top: 10px;
        color: white;
    `;

    const breakpoints = {
        small: "600px",
        medium: "768px",
        large: "1024px",
    };

    const media = Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args) => css`
            @media (max-width: ${breakpoints[label]}) {
                ${css(...args)};
            }
        `;
        return acc;
    }, {});

    const ResponsiveTextDiv = styled(TextDiv)`
        ${media.small`
            padding: 10px;
        `}
    `;

    return (
        <ServicePage>
            <ResponsiveTextDiv>
                <Title>Nossos Serviços</Title>
                <SubTitle> J&R Trust Bank: Seu Banco, Suas Necessidades! </SubTitle>
                <Texts>
                    <br/>
                    No J&R Trust Bank, colocamos você em primeiro lugar. 
                    <br/>
                    Oferecemos Transferências, Empréstimos e Cartões de Crédito adaptados às suas necessidades, 
                    <br/>
                    além de Opções de pagamento convenientes. 
                    <br/>
                    Simplifique sua vida financeira conosco!
                </Texts>
                <MiniText>
                    No J&R Trust Bank, estamos aqui para impulsionar suas aspirações financeiras, 
                    tornando seus sonhos realidade a cada transação!!💖
                </MiniText>
                <Image src={`${process.env.PUBLIC_URL}/assets/appofc.png`} alt="Serviço" />
            </ResponsiveTextDiv>
        </ServicePage>
    );
};

export default AboutService;
