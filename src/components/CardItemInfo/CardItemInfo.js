import React from "react";
import { MainCardItem } from "./CardItemInfoStyle";

const CardItemInfo = (props) => {
  return (
    <MainCardItem {...props} bordered header={props.header}>
      <p style={{fontWeight: '700'}}>{props.name}</p>
      <div>{props.icon}</div>
    </MainCardItem>
  );
};

export default CardItemInfo;
