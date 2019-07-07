import React from "react";
import {  Text, TouchableHighlight, View } from "react-native";
import styles from "../../stylesheet/Cart.style";
import Icon1 from 'react-native-vector-icons/AntDesign';

class SidebarCheckout extends React.PureComponent {
  onClickPlaceOrder =() =>{
    const confirm = this.props.cardExists && this.props.payment === "payment_2";
    if(confirm){
      this.props.confirmPayment();
    }else{
      this.props.navigation.navigate('Payments');
    }
  }
  render() {
    const {
      cart
    } = this.props;
    return (
      <View style={{ height: '80%', marginBottom: '40%' }}>
        <View style={{ backgroundColor: 'white', alignSelf: 'center', borderRadius: 20, marginTop: '5%', marginBottom: '5%', width: '75%' }}>
          <Text style={[styles.titleAccount, { alignSelf: 'center', marginBottom: '2%', marginTop: '4%' }]}>Summary</Text>
          <View style={[styles.viewSubtotal, { width: '100%', marginTop: '3%', height: 70, justifyContent: 'center', alignItems: 'center' }]}>
            <View style={{ flexDirection: 'row', marginBottom: '2%', marginTop: '2%', marginLeft: '20%', marginRight: '20%' }}>
              <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.5, alignSelf: 'flex-start' }]}>Subtotal</Text>
              <Text style={[styles.textSubtotalValue, { marginBottom: '2%', flex: 0.5 }]}>${cart.sub_total} </Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, marginLeft: '20%', marginRight: '20%' }}>
              <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.5, alignSelf: 'flex-start' }]}>Tax</Text>
              <Text style={[styles.textSubtotalValue, { marginBottom: '2%', flex: 0.5 }]}>${cart.vat} </Text>
            </View>
          </View>
          <View style={styles.ViewSingleLine} />
          {/* Service summary  */}
          <View style={[styles.viewSubtotal, { width: '100%', marginTop: '5%', height: 120, justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={[styles.textServiceTitle, { marginBottom: '2%' }]}>Service Summary</Text>
            <View style={{ flexDirection: 'row', marginBottom: '2%', marginTop: '2%', marginLeft: '20%', marginRight: '20%' }}>
              <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
              <Text style={[styles.textDays, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>${cart.sub_total} </Text>
              <Text style={[styles.textSubtotalValue, { marginBottom: '2%', flex: 0.5 }]}>${cart.sub_total} </Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, marginLeft: '20%', marginRight: '20%' }}>
              <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
              <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>${cart.vat}</Text>
              <Text style={[styles.textSubtotalValue, { marginBottom: '2%', flex: 0.5 }]}>${cart.vat} </Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, marginLeft: '20%', marginRight: '20%' }}>
              <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
              <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>${cart.vat}</Text>
              <Text style={[styles.textSubtotalValue, { marginBottom: '2%', flex: 0.5 }]}>${cart.vat} </Text>
            </View>
          </View>
          <View style={styles.ViewSingleLine} />
          {/* View Total */}
          <View style={[styles.viewTotal, { width: '100%', marginBottom: '5%', marginTop: '5%', height: 70, justifyContent: 'center', alignItems: 'center' }]}>
            <View style={{ flexDirection: 'row', marginLeft: '20%', marginRight: '20%', alignSelf: 'center' }}>
              <Text style={[styles.textSubtotalValue, { flex: 0.5, }]}>Total</Text>
              <Text style={[styles.textSubtotalValue, { flex: 0.5, }]}>${cart.total} </Text>
            </View>
          </View>
          {cart.total ? 
            <View>
              <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton, { marginTop: '2%' }]} onPress={() => this.onClickPlaceOrder()}>
                <Text style={[styles.textButtonTitle, { marginLeft: '10%', marginRight: '10%' }]} >Place payment</Text>
              </TouchableHighlight>
            </View>
          :<View />
          }
        </View>
      </View>
    );
  };
};
export default SidebarCheckout;
