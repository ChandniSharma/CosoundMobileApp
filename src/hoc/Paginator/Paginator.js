import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { isNull } from "lodash";

import { performWow } from "../../utils";

import { wowActions } from "../../actions";

import WrapperComponent from "./WrapperComponent";

class Paginator extends React.PureComponent {
  static propTypes = {
    page_count: PropTypes.number,
    callAPI: PropTypes.func, // is expected to return a promise
    page: PropTypes.number,
    onComponentUnmount: PropTypes.func,
    shouldCallAPIInitially: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ])
  };
  constructor(props) {
    super(props);

    this.state = {
      callingAPI: false
    };
  }

  _easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  _scrollTo = (element, to, duration) => {
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      const val = this._easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  _loadMore = () => {
    const {
      page,
      callAPI,
      callApi,
      page_count,
      wowActions,
      shouldSyncWOW
    } = this.props;

    const { callingAPI } = this.state;
    if (!callingAPI && page !== page_count && !isNull(page_count) && !callApi) {
      // call API
      this.setState({ callingAPI: true });

      callAPI(page + 1)
        .then(() => {
          this.setState(
            {
              callingAPI: false,
              page: this.state.page + 1
            },
            () => {
              if (shouldSyncWOW) {
                performWow(wowActions);
              }
            }
          );
        })
        .catch(err => {
          this.setState({ callingAPI: false });
        });
    }

    if (callApi && !callingAPI) {
      // call API
      this.setState({ callingAPI: true }, () => {
        callAPI(page + 1)
          .then(() => {
            this.setState({ callingAPI: false });
          })
          .catch(err => {
            this.setState({ callingAPI: false });
          });
      });
    }
  };

  render() {
    const { callingAPI } = this.state;

    return (
      <WrapperComponent
        callingAPI={callingAPI}
        loadMore={this._loadMore}
        {...this.props}
      />
    );
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
)(Paginator);
