import React from "react";
// import Helmet from "react-helmet";

import { SettingsHeader, FormToast } from "../Commons";
//TabHeader
// import { servicesHeaders } from "../../constants/tabs";

import CreateServiceForm from "./CreateServiceForm";

class CreateService extends React.Component {
  render() {
    return (
      <View>
        <View>
          <SettingsHeader user={this.props.user} />
          <View>
           { /* <TabHeader headers={servicesHeaders} /> */ } 
          </View>
          <View>
            <View>
              <View>
                <View>
                 <Text>
                  {"Nice! Let's create your service!"}
                  </Text>
                </View>
                <CreateServiceForm {...this.props} />
              </View>
            </View>
          </View>
        </View>
        { /* <FormToast /> */ }
      </View>
    );
    //  return (
    //   <React.Fragment>
    //     <Helmet title={"Create Service"} />

    //     <div className="profile">
    //       <SettingsHeader user={this.props.user} />

    //       <div className="container">
    //         <TabHeader headers={servicesHeaders} />
    //       </div>

    //       <div className="container container--wide">
    //         <div className="services services--wide">
    //           <div className="services-create">
    //             <div className="services-create__title wow fadeInUp">
    //               {"Nice! Let's create your service!"}
    //             </div>
    //             <CreateServiceForm {...this.props} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <FormToast />
    //   </React.Fragment>
    // );
    
  }
}

export default CreateService;
