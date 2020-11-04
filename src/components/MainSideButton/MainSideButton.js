import React from 'react';
import {CustomButton} from './MainSideButtonStyle';

const MainSideButton = ({color, boxColor, nameButton, bgColor, MLeft}) => {
    return (
        <CustomButton MLeft={MLeft} bgColor={bgColor} boxColor={boxColor}>
            {nameButton}
        </CustomButton>
    )
}

export default MainSideButton
