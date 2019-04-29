import React from "react";
import PropTypes from "prop-types";
import {View} from 'react-native'

const WrapperComponent = props => {
  const {
    isLoaderInternal,
    callingAPI,
    loaderStyles,
    className,
    loaderClassName
  } = props;
  if (isLoaderInternal)
    return <props.component {...props} callingAPI={callingAPI} />;

  return (
    <View>
      <props.component {...props} />

      {callingAPI && (
        <View >
          <View
            style={Object.assign({}, { paddingBottom: 50 }, loaderStyles)}
          >
            Loading
          </View>
        </View>
      )}
    </View>
  );
};

WrapperComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  callingAPI: PropTypes.bool,
  isLoaderInternal: PropTypes.bool,
  loaderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  loaderClassName: PropTypes.string,
  loaderStyles: PropTypes.object
};

export default WrapperComponent;
