import Search from "./Search";
import Account from "./Account";
import Cart from "./Cart";
import styled from "styled-components";

const Container = styled.header`
  width: 90%;
  margin: 0 auto;
  padding: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6.4rem;
`;

const Logo = styled.a`
  text-decoration: none;
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 4.8rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: #adb5bd;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #fff;
  }
`;

const SearchAccCart = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const Header = ({ coins, copyCoins }) => {
  return (
    <Container>
      <Logo href="#">BitCart</Logo>
      <NavBar>
        <Link>Products</Link>
        <Link>Deals</Link>
        <Link>About</Link>
      </NavBar>
      <SearchAccCart>
        <Search coins={coins} copyCoins={copyCoins} />
        <Account />
        <Cart />
      </SearchAccCart>
    </Container>
  );
};

export default Header;
