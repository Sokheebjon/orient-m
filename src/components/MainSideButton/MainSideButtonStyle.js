import styled from 'styled-components';
import {Button} from 'rsuite';

export const CustomButton = styled(Button)`
    width: 165px;
    height: 37.27px;
    box-shadow: 0px 0px 12px ${props => props.boxColor};
    background-color: ${props => props.bgColor};
    color: white !important;
    margin-left: ${props => props.MLeft};

    &:hover{
        background-color: ${props => props.bgColor} !important;
    }
    &:active{
        background-color: ${props => props.bgColor} !important;
    }

    &:focus{
        background-color: ${props => props.bgColor} !important;
    }



`;