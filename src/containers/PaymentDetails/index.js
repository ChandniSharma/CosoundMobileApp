import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { paymentActions } from "../../actions";

import Validator from "../../validator";
import { isSuccess, isError, formatExpiryDate, history } from "../../utils";

import PaymentsComponent from "../../views/PaymentDetails";

class Payment extends React.PureComponent {
  state = {
    data: {
      cvc: "",
      number: "",
      remember: true,
      expiry_date: ""
    },
    mask: "9999 9999 9999 9999",
    errors: {}
  };

  _resetState = () => {
    this.setState({
      data: {
        cvc: "",
        number: "",
        expiry_date: ""
      },
      errors: {}
    });
  };

  _isValid = (field = null) => {
    const validate = Validator.createValidator(
      {
        cvc: ["required"],
        number: ["required"],
        expiry_date: ["required"]
      },
      this.state.data,
      field
    );

    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };

  _submit = () => {
   
    if (this._isValid()) {
      const { paymentActions } = this.props;
      const { data } = this.state;
      const { exp_month, exp_year } = formatExpiryDate(data.expiry_date);

      const paymentData = Object.assign(
        {},
        {
          number: data.number.replace(/ /g, ""),
          cvc: data.cvc,
          exp_month,
          exp_year
        }
      );
      paymentActions.save(paymentData).then(() => {
        const { paymentDetails } = this.props;
        if (isSuccess(paymentDetails)) {
          return this.props.navigation.navigate('Checkout');
        }

        if (isError(paymentDetails)) {
          alert(paymentDetails.error.message);
          return false;
        }
      });
    }
  };

  _handleChange = (name, value) => {
    const { data, mask } = this.state;
    if (name === "remember") {
      data[name] = !data[name];
    } else {
      data[name] = value;
    }
    if (
      name === "number" &&
      /^3[47]/.test(value) &&
      mask === "9999 9999 9999 9999"
    ) {
      this.setState({ mask: "9999 999999 99999" });
    }

    this.setState(
      {
        data
      },
      () => this._isValid(name)
    );
  };

  render() {
    const { paymentDetails } = this.props;
    const { data, errors, mask } = this.state;
    return (
      <PaymentsComponent
        data={data}
        mask={mask}
        error={""}
        errors={errors}
        submit={this._submit}
        paymentDetails={paymentDetails}
        handleChange={this._handleChange}
        navigation={this.props.navigation}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    paymentDetails: state.paymentDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    paymentActions: bindActionCreators(paymentActions, dispatch)
  };
};

// eslint-disable-next-line

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);
