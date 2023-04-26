import { Header, HeaderWrapper, Link } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <Header>
      <HeaderWrapper>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/tweets">Tweets</Link>
      </HeaderWrapper>
    </Header>
  );
};
