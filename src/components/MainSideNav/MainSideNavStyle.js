import styled from "styled-components";
import { Container, Sidebar, Sidenav, Dropdown, Header, Nav } from "rsuite";
import Slider from "infinite-react-carousel";

export const MainContainer = styled(Container)`
  height: 100vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  object-fit: cover;
`;

export const MainBackDiv = styled.img`
  position: absolute;
  z-index: -1;
`;

export const MainSidebar = styled(Sidebar)`
  height: 100% !important;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4) !important;
  flex-direction: column;
  border-radius: 0px 15px 15px 0px;
  user-select: none
`;

export const MainSideNavDiv = styled(Sidenav)`
  border-radius: 0px 15px 15px 0px;
  background-color: rgba(0, 0, 0, 0) !important;
  color: white !important;
`;

export const SidenavHeader = styled(Sidenav.Header)`
  border-radius: 0px 15px 15px 0px;
  color: white !important;
  padding: 10px;
  /* background: rgba(0,0,0,0.4) !important; */
`;

export const SideHeaderText = styled.span`
  color: white !important;
  margin-top: 7px;
  margin-left: 12px;
`;

export const SideNavBody = styled(Sidenav.Body)`
  color: white !important;
`;

export const DropDownDiv = styled(Dropdown)`
  .rs-dropdown-toggle {
    color: white !important;
  }

  .rs-dropdown-menu {
    background-color: rgba(0, 0, 0, 0.4) !important;
  }

  .rs-dropdown-toggle:hover {
    background: #71b6dd !important;
    color: white !important;
  }

  .rs-dropdown-toggle:visited {
    background: #71b6dd !important;
    color: white !important;
  }

  .rs-dropdown-toggle:active {
    background: #71b6dd !important;
    color: white !important;
  }

  .rs-dropdown-toggle:focus {
    background: #71b6dd !important;
    color: white !important;
  }
`;

export const NavItemMain = styled(Nav.Item)`
  color: white !important;

  .rs-nav-item-content {
    color: white !important;
  }

  .rs-nav-item-content:hover {
    background: #71b6dd !important;
    color: white !important;
  }

  .rs-nav-item-content:focus {
    background: #71b6dd !important;
    color: white !important;
  }

  &:focus {
    background: #71b6dd !important;
    color: white !important;
  }
  &:hover {
    background: #71b6dd !important;
    color: white !important;
  }
`;

export const DropdownItem = styled(Dropdown.Item)`
  color: white !important;

  .rs-dropdown-item:hover {
    background-color: #71b6dd !important;

    .rs-dropdown-item-content:hover {
      background: #71b6dd !important;
    }
  }

  .rs-dropdown-item-content:hover {
    background: #71b6dd !important;
  }

  a {
    color: white !important;
  }

  a:hover {
    background: #71b6dd !important;
  }

  &:hover {
    background: #71b6dd !important;
  }

  .rs-dropdown-item:visited {
    background-color: #71b6dd !important;

    .rs-dropdown-item-content:visited {
      background: #71b6dd !important;
    }
  }

  .rs-dropdown-item-content:visited {
    background: #71b6dd !important;
  }

  a:visited {
    background: #71b6dd !important;
  }

  &:visited {
    background: #71b6dd !important;
  }

  .rs-dropdown-item:focus {
    background-color: #71b6dd !important;

    .rs-dropdown-item-content:focus {
      background: #71b6dd !important;
    }
  }

  .rs-dropdown-item-content:focus {
    background: #71b6dd !important;
  }

  a:focus {
    background: #71b6dd !important;
  }

  &:focus {
    background: #71b6dd !important;
  }
`;

export const MainDashboardHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  width: 98.2%;
  margin-left: 20px;
  background-color: rgba(0, 0, 0, 0.4) !important;
  position: relative;
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px 0px 0px 15px;
  color: white !important;
  padding: 10px;
`;

export const MainIconDiv = styled.div`
  padding-top: 10px;
  width: 40px;
  text-align: center;
`;

export const CarouselDivMine = styled(Slider)`
  width: 630px !important;

  .carousel-next {
    &::before {
      background-image: url('../../images/next.png') !important;
    }
    /* background-image: url('../../images/next.png'); */
  }

  .carousel-prev {
    &::before {
      background-image: url('../../images/prev.png') !important;
    }
    /* background-image: url('../../images/prev.png'); */
  }

  .carousel-item active{
    
  }

  .carousel-item {
    /* transform: translateX(343px) !important; */
    left: 50px !important;
  }
`;

export const CarouselDivItem = styled.div`
  display: flex !important;
  flex-direction: row !important;
  /* justify-content: space-between; */
  user-select: none;
  line-height: 35px;
  /* margin-left: 5px */
  /* width: 120px !important; */

  i{
    padding-top: 11px;
    margin-right: 10px
  }
`;

export const MainSideNavLangPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MainSideNavLangPickerItem = styled.p`
  
  margin-top: 4px;
  &:hover{
    cursor: pointer;
    color: #1db5e1;
  }

  &:focus{
    color: #1db5e1 !important;
    background-color: red;
  }
  &:focus-within{
    color: #1db5e1 !important;
  }

  &:focus-visible{
    color: #1db5e1 !important;
  }

  &:active{
    color: #1db5e1 !important;
  }

  &:visited{
    color: #1db5e1 !important;
    background-color: red;
  }
`;

export const CustomUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 15px;

  img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  p{
    line-height: 50px;
    margin-left: 15px;
  }
`;

export const MainLightDiv = styled.div`
  border-radius: 8px;
  background-color: #000;
  width: 33px;
  height: 34px;
  margin-left: 18px;
  margin-right: 19px;
  padding: 5px;
`;
