import styled from 'styled-components';

const Wrapper = styled.div`
  width: 12rem;
  height: 100vh;
  background-color: khaki;
`;
const Logo = styled.div`
  width: 100%;
  height: 25%;
  background-color: red;
`;
const List = styled.div`
  width: 100%;
  height: 50%;
  background-color: blue;
`;
const Links = styled.div`
  width: 100%;
  height: 25%;
  background-color: purple;
`;

const SideBar = () => {
  return (
    <Wrapper>
      <Logo>logo here</Logo>
      <List>Lists here</List>
      <Links>Links here</Links>
    </Wrapper>
  );
};

export default SideBar;
