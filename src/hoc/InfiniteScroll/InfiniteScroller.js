import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";

import { performWow } from "../../utils";

import { wowActions } from "../../actions";

import WrapperComponent from "./WrapperComponent";

class InfiniteScroller extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      callingAPI: false
    };
  }

  componentDidMount() {
    // window.addEventListener("scroll", this.handleScroll, false);
    const { callAPI, shouldCallAPIInitially, wowActions } = this.props;
    if (shouldCallAPIInitially) {
      this.setState(
        {
          callingAPI: true
        },
        () => {
          callAPI(1)
            .then(r => {
              this.setState(
                {
                  callingAPI: false
                },
                () => {
                  performWow(wowActions);
                }
              );
            })
            .catch(err => {
              this.setState({
                callingAPI: false
              });
            });
        }
      );
    }
  }

  componentWillUnmount() {
   // window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { callAPI, page, page_count, wowActions, callApi } = this.props;
    const { callingAPI } = this.state;
    const lhs = window.innerHeight + window.pageYOffset;
    const conditionToLoadMoreItems = lhs >= document.body.offsetHeight;

    if (conditionToLoadMoreItems) {
      if (
        page_count &&
        !callingAPI &&
        page !== page_count &&
        !isNull(page_count)
      ) {
        // call API
        this.setState({ callingAPI: true }, () => {
          callAPI(page + 1)
            .then(() => {
              this.setState(
                {
                  callingAPI: false
                },
                () => {
                  performWow(wowActions);
                  window.scrollTo(0, lhs - 250);
                }
              );
            })
            .catch(err => {
              this.setState({ callingAPI: false });
            });
        });
      }

      if (callApi && !callingAPI) {
        // call API
        this.setState({ callingAPI: true }, () => {
          callAPI(page + 1)
            .then(() => {
              this.setState({ callingAPI: false }, () => {
                performWow(wowActions);
                window.scrollTo(0, lhs - 250);
              });
            })
            .catch(err => {
              this.setState({ callingAPI: false });
            });
        });
      }
    }
  };

  render() {
    const { callingAPI } = this.state;
    return <WrapperComponent callingAPI={callingAPI} {...this.props} />;
  }
}

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    wowActions: bindActionCreators(wowActions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InfiniteScroller);
