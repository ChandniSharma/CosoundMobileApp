import React from "react";

const WrapperComponent = props => {
  return (
     <props.component {...props} />
  )
};

export default WrapperComponent;
