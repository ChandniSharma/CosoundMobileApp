import React from "react";
import { isNull } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//performWow, 
import { isError, fixRotationOfFile } from "../../utils";

import { userActions, genreActions } from "../../actions";

import AccountSettingsTabs from "../../views/AccountSettingsTabs";
//import Account from "../../views/Account";

const tabs = [
  { id: 0, name: "Contact information" },
  { id: 1, name: "Details" },
  { id: 2, name: "Change Password" },
  { id: 3, name: "Payment details" },
  { id: 4, name: "Notification settings" },
  { id: 5, name: "Other" }
];

class AccountSettings extends React.PureComponent {
  state = {
    tabIndex: 0
  };

  componentDidMount() {
    this._restCalls();
  }

  /**
   * Rest calls
   */
  _restCalls = () => {
    return this.props.genreActions.fetchGenres(!isNull(this.props.user.token));
  };

  _switchTab = tabIndex => {
    this.setState(
      {
        tabIndex
      }
     // },
      //() => performWow(this.props.wowActions)
    );
  };

  _updateUser = (data, requestingType) => {
    return this.props.userActions.update(data, requestingType);
  };

  _changePassword = data => {
    return this.props.userActions.changePassword(data);
  };

  _uploadProfilePic = (name, files) => {
    console.log("name===", name, "FILE++",files)
  //  const { name, files } = e.target;
    if (files) {
      const { userActions } = this.props;
     // return fixRotationOfFile(files).then(blob => {
        console.log(" 62 ");
        userActions.uploadProfilePic(name, files).then(() => {
          console.log(" 64");
          if (isError(this.props.profilePic)) {
            alert(this.props.profilePic.error.message)
            //return toast.error(this.props.profilePic.error.message);
          }
        });
     // });
    }
  };

  render() {
    const { tabIndex } = this.state;
    const {
      user,
      genres,
      details,
      profilePic,
      contactInfo,
      paymentDetails,
      changePassword
    } = this.props;

    return (
      <AccountSettingsTabs
      
        tabs={tabs}
        user={user}
        genres={genres}
        details={details}
        tabIndex={tabIndex}
        profilePic={profilePic}
        contactInfo={contactInfo}
        switchTab={this._switchTab}
        _updateUser={this._updateUser}
        paymentDetails={paymentDetails}
        changePassword={changePassword}
        _changePassword={this._changePassword}
        uploadProfilePic={this._uploadProfilePic}
        navigation = {this.props.navigation}
        notificationCount={this.props.notificationCount}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    genres: state.genres,
    details: state.details,
    profilePic: state.profilePic,
    contactInfo: state.contactInfo,
    paymentDetails: state.paymentDetails,
    changePassword: state.changePassword,
    user: state.user,
    notificationCount: state.notificationCount
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    genreActions: bindActionCreators(genreActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSettings);
