import styled from 'styled-components';
import { Navbar, Nav } from 'rsuite';
import { Link } from 'react-router-dom';

export const NavbarHeader = styled(Navbar.Header)`
    line-height: 56px;
`;

export const NavbarHome = styled(Navbar)`
  background-color: rgba(0, 0, 0, 0.3) !important;
  padding: 0 250px;
`;

export const MainNav = styled(Nav)`
  
`;

export const NavItem = styled(Nav.Item)`
    padding: 0 ${(props) => props.padding} !important;
    background: ${(props) => props.background} !important;
    color: ${(props) => props.color} !important;

    &:hover {
        background: none !important;
    }

    .rs-nav-item-content{
        height: 100%;
        line-height: ${props => props.lineHeight} !important;
        padding-top: ${props => props.pTop} !important;
        padding-bottom: ${props => props.pBottom} !important;
    }
`;

export const CustomLink = styled(Link)`
  text-decoration: none !important;
  padding: 10px !important;
  color: white;
  height: 70px;
  border-radius: 5px;
  border: 1px solid #1db5e1;
  background: #1db5e1;

  &:hover {
    color: white !important;
  }
`;

// rs-nav-item rs-nav-item-active