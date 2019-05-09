import React from "react";
import { Text, View} from "react-native";

// import { Loader } from "../../components/Commons";

const WrapperComponent = props => {
  const {
    isLoaderInternal,
    callingAPI,
    loaderStyles,
    className,
    loaderClassName
  } = props;

  // if (isLoaderInternal)
  //   return <props.component {...props} callingAPI={callingAPI} />;

  console.log(" in wrapper =====", props);
  return (
    // <View>
    //             <Text>Hello in Wrapper  </Text>
    //         </View>

     <props.component {...props} />

    // <React.Fragment>
    //   <props.component {...props} />

    //   {callingAPI && (
    //     // <div className="row">
    //     <div
    //       style={Object.assign({}, { textAlign: "center" }, loaderStyles)}
    //       className={loaderClassName}
    //     >
    //       <Loader fill={"#53b2af"} height={"30px"} />
    //     </div>
    //     // </Re>
    //   )}
    // </React.Fragment>
  )
};

export default WrapperComponent;
