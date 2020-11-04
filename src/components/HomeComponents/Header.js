import React, { useState } from "react";
import { Container, Icon, Header, FlexboxGrid } from "rsuite";
import { NavbarHeader, NavbarHome, NavItem, MainNav, CustomLink} from "./MainStyle";

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <MainNav {...props} activeKey={active} onSelect={onSelect}>
      <NavItem eventKey="home" color="white">
        Home
      </NavItem>
      <NavItem color="white" eventKey="news">News</NavItem>
      <NavItem pTop={0} pBottom={0} lineHeight='57px' hback="none">
        <CustomLink to="/login">Login</CustomLink>
      </NavItem>
    </MainNav>
  );
};

const HeaderMain = () => {
  const [active, setActive] = useState("home");
  const [activeNav, setActiveNav] = useState(false);

  const handleActiveNav = () => {
    setActiveNav(!activeNav);
  };
  const handleSelect = (e) => {
    setActive(e);
  };

  return (
    <Container>
      <Header>
        <NavbarHome>
          <NavbarHeader>OrientWS</NavbarHeader>
          <FlexboxGrid justify="end">
            <CustomNav active={active} onSelect={handleSelect} />
          </FlexboxGrid>
        </NavbarHome>
      </Header>
    </Container>
  );
};

export default HeaderMain;
