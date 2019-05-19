import React from "react";

import { ContactInfo, Details, ChangePassword, Payment } from "./Tabs";

const TabComponent = ({ tabIndex, ...rest }) => {
  switch (tabIndex) {
    case 0:
      return <ContactInfo {...rest} />;
    case 1:
      return <Details {...rest} />;
    case 2:
      return <ChangePassword {...rest} />;
    case 3:
      return <Payment {...rest} />;
    default:
      return null;
  }
};

export default TabComponent;
