import React from "react";
import { Link } from "react-router-dom";

import { Svg } from "../Commons";

const PlanTab = ({ item, planTab }) => (
  <div
    className="benefits"
    data-plan={item.id}
    id={item.id}
    style={planTab === item.id ? { display: "block" } : null}
  >
    <div className="benefits__title">{item.tab.title}</div>
    <div className="benefits__subtitle">{item.tab.subTitle}</div>
    <div className="benefits__list">
      {item.tab.list.map((listItem, listIndex) => {
        return (
          <div className="benefits__el" key={listIndex}>
            <div className="benefits__icon">
              <Svg name={listItem.icon} />
            </div>
            <div className="benefits__el-name">{listItem.name}</div>
            <div className="benefits__el-desc">
              <p>{listItem.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
    <div className="benefits__cta">
      <Link to={"#"} className="btn btn-primary btn-primary--red">
        <span>Continue</span>
      </Link>
    </div>
  </div>
);

export default PlanTab;
