import React from "react";
import { isEmpty } from "lodash";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "../../stylesheet/Cart.style";

class Sidebar extends React.PureComponent {
  
  render() {
    const { cart } = this.props;
      return (
        <View style={{height:'80%', marginBottom:'30%', backgroundColor:'rgb(245,245,245)'}}>
        <View style={{backgroundColor:'white', alignSelf:'center', borderRadius:20, marginTop:'5%', marginBottom:'5%', width:'75%'}}>
            <Text style={[styles.titleAccount, {alignSelf:'center', marginBottom:'2%', marginTop:'4%'}]}>Summary</Text>

            <View style={[styles.viewSubtotal, {width:'100%',marginTop:'10%', height:100,  justifyContent:'center', alignItems:'center'}]}>
          
            <View style={{flexDirection:'row', marginBottom:'2%', marginTop:'2%', marginLeft:'20%', marginRight:'20%' }}>
              <Text style={[styles.textSubtotal, {marginBottom:'2%',flex:0.5, alignSelf:'flex-start'} ]}>Subtotal</Text>
              <Text style={[styles.textSubtotalValue,{marginBottom:'2%',flex:0.5} ]}>${cart.sub_total} </Text>
            </View>

            <View style={{flexDirection:'row', marginBottom:'2%', flex:1,marginLeft:'20%', marginRight:'20%' }}>
              <Text style={[styles.textSubtotal, {marginBottom:'2%',flex:0.5, alignSelf:'flex-start' }]}>Tax</Text>
              <Text style={[styles.textSubtotalValue, {marginBottom:'2%',flex:0.5} ]}>${cart.vat} </Text>
            </View>
        </View>
      <View style={styles.ViewSingleLine}/>
        <View style={[styles.viewTotal, {width:'100%', marginBottom:'5%', height:100, justifyContent:'center', alignItems:'center'}]}>
          
            <View style={{flexDirection:'row',  marginLeft:'20%', marginRight:'20%', alignSelf:'center'}}>
              <Text style={[styles.textSubtotalValue,{flex:0.5,}]}>Total</Text>
              <Text style={[styles.textSubtotalValue, {flex:0.5,}]}>${cart.total} </Text>
            </View>
         
            <View style={{flexDirection:'row',marginTop:'2%',marginLeft:'20%', marginRight:'20%',alignSelf:'center'}}>
              <Text style={[styles.textSubtotalValue, {flex:0.5,marginRight:'2%'} ]}>Delivery Time</Text>
              <Text style={[styles.textSubtotalValue, {flex:0.5,}]}>{cart.total}days </Text>
            </View>
          </View>

            {!isEmpty(cart.data) && (
              // Redirect to checkout page
              // <Link
              //   to={"/checkout"}
              //   className="btn btn-primary btn-primary--red"
              // >
              // </Link>
              <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton, {marginTop:'2%'}]} onPress={()=> this.props.navigation.navigate('Checkout')}>
                <Text style={[styles.textButtonTitle, {marginLeft:'10%', marginRight:'10%'}]}>Proceed to payment</Text>
          </TouchableHighlight>
            )}
            <TouchableHighlight underlayColor="#25b6ad" style={{marginBottom:'5%', alignSelf:'center', marginTop:'10%', height:'10%'}}>
                <Text style={styles.textCartButtonTitle}>Add To Cart</Text>
          </TouchableHighlight>

         
        </View>
      </View>
    );
  }
}
export default Sidebar;