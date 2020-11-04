import styled from 'styled-components';

export const HideEyeSvg = styled.svg`
    width: ${props => props.width} !important;
    height: ${props => props.height} !important;
`;

export const OrientLogo = styled.svg`
  width: ${(props) => props.width} !important;
  height: ${(props) => props.height} !important;
  margin-left: ${props => props.MLeft} !important;
  position: ${props=> props.position} !important;
  left: ${props => props.left} !important;
  right: ${props => props.right} !important;
`;

export const MainRightArrow = styled.svg`
  fill: white !important;
  color: white !important;
  background: red !important;
`;

export const MainMoneyIcon = styled.svg`
  width: ${(props) => props.width} !important;
  height: ${(props) => props.height} !important;
`;

export const MainCardIcon = styled.svg`
  width: ${(props) => props.width} !important;
  height: ${(props) => props.height} !important;
`;