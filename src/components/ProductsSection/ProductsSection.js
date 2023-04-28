import styled from "styled-components";
import { BsPlus } from "react-icons/bs";
import { CoinsContext } from "../../App";
import { useContext } from "react";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 6.4rem;
`;

const Card = styled.div`
  text-align: center;
  position: relative;
  width: 50%;
  border: 5px solid #fff;
  border-radius: 2.3rem;
  padding: 2.4rem;
`;

const Icon = styled.img`
  margin-bottom: 1.6rem;
`;

const Name = styled.h3`
  font-size: 2.4rem;
  color: #fff;
  margin-bottom: 1.6rem;
`;

const Price = styled.p`
  font-size: 1.6rem;
  color: #fff;
`;

const AddToCartBtn = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background: none;
  color: #fff;
  font-size: 2.4rem;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const ProductsSection = ({ coins }) => {
  const { cartCoins, setCartCoins, cartOpen, setCartOpen } =
    useContext(CoinsContext);

  const handleClick = (coin) => {
    setCartCoins([...cartCoins, coin]);
  };

  return (
    <Container>
      {coins.map((coin) => (
        <Card key={coin.id}>
          <Icon src={coin.icon} />
          <Name>{coin.name}</Name>
          <Price>{coin.price.toFixed(2)}EUR</Price>
          <AddToCartBtn
            onClick={() => {
              handleClick(coin);
            }}
          >
            <BsPlus></BsPlus>
          </AddToCartBtn>
        </Card>
      ))}
    </Container>
  );
};

export default ProductsSection;
