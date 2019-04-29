import React from "react";

import SignupSuggestions from "./SignupSuggestions";
import SignupStep5 from "./SignupStep5";
import { View } from "native-base";
import { isEmpty } from "lodash";

class SuggestionWraper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { follow, callAPI, followUser, suggestions, loadMore, callingAPI, isShowSuggestion, navigate } = this.props;
    const { paginationData } = suggestions;
    console.log("isShowSuggestion====", isShowSuggestion,"suggestions.isRequesting=",suggestions.isRequesting,"callingAPI===",callingAPI )
    return (
     
      <View style= {{flex:1}}>
        {suggestions.isRequesting && !callingAPI && <SignupStep5 />}
        {!suggestions.isRequesting && !isEmpty(suggestions.error) && (
          <View>{suggestions.error.message} </View>
        )}

        {!suggestions.isRequesting && !isEmpty(suggestions.error) && (
          <View>{suggestions.error.message} </View>
        )}
 {/* {this.signupViewLoad()} */}

      {isShowSuggestion && <SignupSuggestions 
          follow = { follow}
          followUser = {followUser}
          suggestions = {suggestions}
          loadMore = {loadMore}
          callAPI = {callAPI}
          navigate={navigate}
        />
        }
       
      </View>
    )
  }
}

export default SuggestionWraper;
