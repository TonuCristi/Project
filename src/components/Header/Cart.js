import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";
import { useContext } from "react";
import { CoinsContext } from "../../App";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  position: relative;
`;

const CartBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;

const Icon = styled(BsCartPlus)`
  font-size: 2.4rem;
`;

const Cart = () => {
  const { cartCoins, setCartCoins, cartOpen, setCartOpen } =
    useContext(CoinsContext);

  const handleClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <Container>
      <CartBtn onClick={handleClick}>
        <Icon />
        Cart
      </CartBtn>
    </Container>
  );
};

export default Cart;
