import React from "react";

import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import SignupStep3 from "./SignupStep3";

class Signup extends React.Component {
  render() {
    const {
      data,
      signup,
      genres,
      errors,
      follow,
      signUp,
      callAPI,
      tabIndex,
      followUser,
      suggestions,
      fetchGenres,
      goToTabIndex,
      handleSelect,
      handleChange,
      handleKeyPress,
      addMoreSocials,
      confirmLocation,
      retrieveLocation,
      handleDateChange,
      handleFileChange,
      navigateToProfile,
      handleMultiSelect,
      handleSocialLinks,
      
    } = this.props;
    switch (tabIndex) {
      case 1:
        return (
          <SignupStep1
            goToTabIndex={goToTabIndex}
            data={data}
            errors={errors}
            handleChange={handleChange}
            confirmLocation={confirmLocation}
            retrieveLocation={retrieveLocation}
            navigation={this.props.navigation}
          />
        );
      case 2:
        return <SignupStep2 goToTabIndex={goToTabIndex} handleChange={handleChange} navigation={this.props.navigation} />;
      case 3:
        return (
          <SignupStep3
            goToTabIndex={goToTabIndex}
            navigation={this.props.navigation}
            data={data}
            signup={signup}
            genres={genres}
            signUp={signUp}
            errors={errors}
            fetchGenres={fetchGenres}
            handleChange={handleChange}
            addMoreSocials={addMoreSocials}
            handleKeyPress={handleKeyPress}
            handleDateChange={handleDateChange}
            handleFileChange={handleFileChange}
            handleMultiSelect={handleMultiSelect}
            handleSocialLinks={handleSocialLinks}
          />
        );
      default:
        return null;
    }
  }
}

export default Signup;
