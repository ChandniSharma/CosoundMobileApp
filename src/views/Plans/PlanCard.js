import React from "react";
import { Link } from "react-router-dom";

const PlansCard = ({ item, index, _showPlanTab, planTab }) => (
  <div
    className="plans__col wow fadeInUp"
    data-wow-delay={index === 1 ? ".4s" : index === 2 ? ".5s" : ".2s"}
  >
    <div
      className={`plan-card ${planTab === item.id ? "is-active" : ""}`}
      onClick={() => _showPlanTab(item.id)}
      data-target={`#${item.id}`}
    >
      <div className="plan-card__icon">
        <img src={item.img} alt="plan" />
      </div>
      <div className="plan-card__name">{item.name}</div>
      <div className="plan-card__desc">{item.desc}</div>
      <div className="plan-card__cta">
        <button onClick={() => _showPlanTab(item.id)} className="btn btn-plan">
          <span>Select plan</span>
        </button>
      </div>
    </div>
  </div>
);

export default PlansCard;
