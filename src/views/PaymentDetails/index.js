import React from "react";
import Helmet from "react-helmet";
// import InputMask from "react-input-mask";

import { checkError } from "../../utils";

class Payments extends React.PureComponent {
  render() {
    const {
      mask,
      data,
      errors,
      submit,
      handleChange,
      paymentDetails
    } = this.props;
    const error = checkError(paymentDetails.error);
    const formatChars = {
      d: "[0-9]",
      s: "[0-1]"
    };

    return (
      <View>
       <View>
          <View>
            <View>
              <Text>Please add your card info</Text>
            </View>
            <View>
             <Text> We wont keep any personal information about your card in our
              system. 
              </Text>
            </View>
            <View>
              <View>
               {/* <InputMask
                  name={"number"}
                  maskChar={null}
                  mask={mask}
                  placeholder={"XXXX  XXXX  XXXX  XXXX"}
                  onChange={handleChange}
                  value={data.number}
                />*/}
                {errors.number && <Text>{errors.number}</Text>}
                {error &&
                  error.error &&
                  error.error.number &&
                  error.error.number.map((item, index) => {
                    return <Text>{item} </Text>;
                  })}
              </View>
              <View>
                <View>
                  {/*<InputMask
                    name={"expiry_date"}
                    maskChar={null}
                    mask={"sd/dd"}
                    formatChars={formatChars}
                    placeholder={"MM/YY"}
                    onChange={handleChange}
                    value={data.expiry_date}
                  />*/}
                  {errors.expiry_date && (
                    <Text>{errors.expiry_date} </Text>
                  )}
                  {error &&
                    error.error &&
                    error.error.exp_month &&
                    error.error.exp_month.map((item, index) => {
                      return <Text>{item}</Text>;
                    })}
                  {error &&
                    error.error &&
                    error.error.exp_year &&
                    error.error.exp_year.map((item, index) => {
                      return <Text>{item} </Text>;
                    })}
                </View>>
                  {/*<InputMask
                    name={"cvc"}
                    maskChar={null}
                    mask={"999"}
                    placeholder={"CVC"}
                    onChange={handleChange}
                    value={data.cvc}
                  />*/}
                  {errors.cvc && <Text{errors.cvc} </Text>}
                  {error &&
                    error.error &&
                    error.error.cvc &&
                    error.error.cvc.map((item, index) => {
                      return <Text>{item} </Text>;
                    })}
                </View>
              </View>
              <View>
               {/* <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  onChange={handleChange}
                  checked={data.remember}
                  value={data.remember}
                />*/}
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim
                </Text>
              </View>
              {/*<SubmitButtonDiv
                wow={"1s"}
                className="f-page__form"
                onClick={submit}
                appendClass={"-cta"}
                loading={paymentDetails.isRequesting}
                loaderComponent={
                  <Loader fill={"#ffffff"} height={"15px"} width={"15px"} />
                }
                buttonText={<span>Pay</span>}
              />*/}
            </View>
          </View>
        </View>
    );
  }
}

export default Payments;
