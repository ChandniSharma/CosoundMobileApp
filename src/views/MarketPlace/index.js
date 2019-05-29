import React from "react";
// import Helmet from "react-helmet";
// import { Link } from "react-router-dom";

import { Paginator } from "../../hoc";
// import { UserCard, Slider } from "../Commons";
import ServiceGrid from "./ServiceGrid";

class MarketPlaceComponent extends React.PureComponent {
  render() {
    const { user, services, fetchServices, featuredServices } = this.props;
    const paginationData = services;
    return (
      <View>
        <View>
          <View>
            <View>
              <View>
                <View>
                   {/*<UserCard user={user} />*/}
                  <View>
                   {/* <Link
                      to={"/purchased-services"}
                      className="btn btn-primary btn-primary--red"
                    >
                      <Text>My Market</Text>
                    </Link>*/}
                    <Text>My Market</Text>
                  </View>
                </View>
              </View>

              {/*<View>
                <Slider resource={featuredServices} />
              </View>*/}
            </View>

            <Paginator
              isLoaderInternal
              services={services}
              component={ServiceGrid}
              callAPI={fetchServices}
              page={paginationData.page}
              page_count={paginationData.page_count}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default MarketPlaceComponent;
