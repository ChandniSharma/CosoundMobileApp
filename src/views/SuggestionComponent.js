import React from "react";

import SignupSuggestions from "./SignupSuggestions";
import SignupStep5 from "./SignupStep5";
import { View } from "native-base";
import { isEmpty } from "lodash";

class SuggestionComponent extends React.Component {
  render() {
    const { follow, callAPI, followUser, suggestions } = this.props;
    const { paginationData } = suggestions;
    
    return (
      <View>
        {suggestions.isRequesting && !callingAPI && <SignupStep5 />}
        {!suggestions.isRequesting && !isEmpty(suggestions.error) && (
          <View>{suggestions.error.message} </View>
        )}

        {!suggestions.isRequesting && !isEmpty(suggestions.error) && (
          <View>{suggestions.error.message} </View>
        )}
        
        <SignupSuggestions />

      </View>
    )
  }
}

export default SuggestionComponent;
