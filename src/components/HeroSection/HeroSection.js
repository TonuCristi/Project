import styled from "styled-components";
import { GiCrystalGrowth } from "react-icons/gi";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 3.2rem;
  margin-bottom: 14rem;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 6.4rem;
  padding: 2.4rem 6.4rem;
`;

const Content = styled.div``;

const Heading = styled.h1`
  color: #fff;
  font-size: 5.6rem;
  margin-bottom: 2.4rem;
`;

const Btn = styled.button`
  border: none;
  background-color: #087f5b;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.6rem 3.2rem;
  border-radius: 2.5rem;
  color: #fff;
  cursor: pointer;
`;

const Icon = styled(GiCrystalGrowth)`
  width: 35rem;
  height: 35rem;
  color: #fff;
  justify-self: end;
`;

const HeroSection = () => {
  return (
    <Container>
      <Box>
        <Content>
          <Heading>The best crypto shop on the market</Heading>
          <Btn>Buy Now</Btn>
        </Content>
        <Icon />
      </Box>
    </Container>
  );
};

export default HeroSection;
