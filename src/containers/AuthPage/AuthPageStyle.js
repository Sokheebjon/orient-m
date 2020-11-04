import styled from "styled-components";
import { InputGroup, Button } from "rsuite";

export const MainLoginDiv = styled.div`
  padding-top: 150px;
  background-image: url(${(props) => props.back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`;

export const PInputGroup = styled(InputGroup)`
  width: 100% !important;
`;

export const AuthButton = styled(Button)`
    width: 100% !important;
`;

export const AuthHeader = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    margin-left: 5px;
    line-height: 12px;

    span{
      font-size: 12px;
    }
  }
`;

