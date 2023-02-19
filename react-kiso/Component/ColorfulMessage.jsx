import React from "react";

export const ColorfulMessage = (props) => {
  //分割代入
  const { color, children } = props;
  const contentStyle = {
    fontSize: "24px",
    color
  };

  return <p style={contentStyle}>{children}</p>;
};