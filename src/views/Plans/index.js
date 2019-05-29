import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import { getYPosition } from "../../utils";

import { PlansBackground, Svg } from "../Commons";
import PlansGrid from "./PlansGrid";
import PlansTabs from "./PlanTabs";

class Plans extends React.PureComponent {
  tabNode = null;
  state = {
    planTab: null
  };
  _applyRef = node => {
    this.tabNode = node;
  };

  _showPlanTab = planTab => {
    this.setState({ planTab }, () =>
      setTimeout(() => {
        const top = getYPosition(this.tabNode);
        window.scroll({ top, left: 0, behavior: "smooth" });
      }, 300)
    );
  };

  render() {
    const { planTab } = this.state;

    return (
      <React.Fragment>
        <Helmet title={"Plans"} />
        <div className="signup">
          <div className="page-bg">
            <div className="page-bg__wrapper page-bg__wrapper--plans">
              <PlansBackground />
            </div>
          </div>

          <div className="container">
            <div className="signup__wrapper">
              <Link className="signup__logo wow fadeInDown" to={"/"}>
                <Svg name="ico-logo" />
              </Link>
              <h2 className="signup__heading wow fadeInUp" data-wow-delay=".4s">
                Please select Plan
              </h2>
              <div className="signup__text wow fadeInUp" data-wow-delay=".5s">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="plans">
                <PlansGrid planTab={planTab} _showPlanTab={this._showPlanTab} />
                <PlansTabs planTab={planTab} applyRef={this._applyRef} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Plans;
