import React from "react";

import PlanCard from "./PlanCard";
import data from "./data";

class PlansGrid extends React.PureComponent {
  render() {
    const { _showPlanTab, planTab } = this.props;
    return (
      <div className="plans__grid">
        {data.map((item, index) => {
          return (
            <PlanCard
              item={item}
              key={index}
              index={index}
              planTab={planTab}
              _showPlanTab={_showPlanTab}
            />
          );
        })}
      </div>
    );
  }
}

export default PlansGrid;
