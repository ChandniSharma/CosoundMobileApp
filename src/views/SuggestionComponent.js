import React from "react";

import SuggestionWraper from "./SuggestionWraper";
import { View } from "native-base";
import { Paginator } from "../hoc/";

class SuggestionComponent extends React.Component {
  render() {
    const { follow, callAPI, followUser, suggestions, isShowSuggestion, navigate } = this.props;
    const { paginationData } = suggestions;
    return (
      <View style= {{flex:1}}>
      
        <Paginator
                component={SuggestionWraper}
                callAPI={callAPI}
                page_count={paginationData.page_count}
                page={paginationData.page}
                suggestions={suggestions}
                followUser={followUser}
                follow={follow}
                isLoaderInternal
                shouldSyncWOW
                isShowSuggestion={isShowSuggestion}
                navigate={navigate}
              />

      </View>
    )
  }
}

export default SuggestionComponent;
