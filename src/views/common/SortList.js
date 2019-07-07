import React from "react";
import { get, find } from "lodash";
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from "../../stylesheet/serviceList.style";
import { getSelectedSortType } from "../../utils";
import { sortTypes } from "../../constants/sortTypes";
export default class Sort extends React.PureComponent {
  state = {
    show: false
  };

  _toggleMenu = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const { type, sort } = this.props;
    const selectedType = getSelectedSortType(type);
    const selectedName = get(
      find(sortTypes, o => o.value === selectedType),
      "name",
      ""
    );
    return(
        <View>
        <View style={{ flexDirection: 'row', alignSelf:'flex-end', marginRight:'5%' }}>
        <Text>Sort By:</Text>
        <View>
          <TouchableOpacity onPress={()=>this._toggleMenu()}>
            <Text style={styles.selectedText}>{selectedName}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {this.state.show?
      sortTypes.map(item => {
        return (
          <TouchableHighlight underlayColor="#20ACAC" style={styles.buttonSort} onPress={() => sort(item.value)}>
          <Text style={styles.popupText}>{item.name}</Text>
        </TouchableHighlight>)

          })
          :null}
      </View>
    );
  }
}