import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
`;

const Icon = styled(BsFillPersonFill)`
  font-size: 2.4rem;
`;

const Account = () => {
  return (
    <Container>
      <Icon />
      Account
    </Container>
  );
};

export default Account;
