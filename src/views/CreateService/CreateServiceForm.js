import React from "react";

import {
  Title,
  Price,
  Images,
  Keypoints,
  CategoryForm,
  DeliveryTime,
  DescriptionForm
} from "./Form";

const CreateServiceForm = ({ tabIndex, ...rest }) => {
  switch (6) {
    case 0:
      return <CategoryForm {...rest} />;
    case 1:
      return <DescriptionForm {...rest} />;
    case 2:
      return <Keypoints {...rest} />;
    case 3:
      return <DeliveryTime {...rest} />;
    case 4:
      return <Price {...rest} />;
    case 5:
      return <Title {...rest} />;
    case 6:
      return <Images {...rest} />;
    default:
      return null;
  }
};

export default CreateServiceForm;
