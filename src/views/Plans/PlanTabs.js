import React from "react";

import PlanTab from "./PlanTab";
import data from "./data";

class PlansTabs extends React.PureComponent {
  render() {
    const { planTab, applyRef } = this.props;
    return (
      <div className="plans-tabs" ref={applyRef}>
        {data.map((item, index) => {
          return (
            <PlanTab item={item} key={index} index={index} planTab={planTab} />
          );
        })}
      </div>
    );
  }
}

export default PlansTabs;
