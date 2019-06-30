import React from "react";
import { get, find } from "lodash";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
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
    const { show } = this.state;
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

       
    {/* //    {this.state.isSortValuePopupShow ? <View style={styles.viewSort}>
    //     <TouchableHighlight underlayColor="#20ACAC" style={styles.buttonSort1} onPress={this.selectSortValue.bind(this)}>
    //       <Text style={styles.popupText}>Name</Text>
    //     </TouchableHighlight>

    //     <TouchableHighlight underlayColor="#20ACAC" style={styles.buttonSort} onPress={this.selectSortValue.bind(this)}>
    //       <Text style={styles.popupText}>Date</Text>
    //     </TouchableHighlight>

    //     <TouchableHighlight underlayColor="#20ACAC" style={styles.buttonSort3} onPress={this.selectSortValue.bind(this)}>
    //       <Text style={styles.popupText}>Value</Text>
    //     </TouchableHighlight>
    //   </View> : null} */}
      </View>
    );
    // return (
    //  <View>
    //     <View>
    //       <span>Sort by:</span>
    //       <div
    //         className={`selectric-wrapper selectric-selectric-no-bg ${
    //           show ? "selectric-open selectric-below" : ""
    //         }`}
    //       >
    //         <div className="selectric-hide-select">
    //           <select
    //             className="selectric-no-bg"
    //             value={selectedType}
    //             onChange={e => console.log(e)}
    //             tabIndex="-1"
    //           >
    //             {sortTypes.map(item => {
    //               return (
    //                 <option key={item.id} value={item.value}>
    //                   {item.name}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //         </div>
    //         <div className="selectric">
    //           <span className="label" onClick={this._toggleMenu}>
    //             {selectedName}
    //           </span>
    //         </div>
    //         <div
    //           className="selectric-items"
    //           tabIndex="-1"
    //           style={show ? { width: "100%" } : null}
    //         >
    //           <div className="selectric-scroll">
    //             <ul>
    //               {sortTypes.map((item, index) => {
    //                 return (
    //                   <li
    //                     key={item.id}
    //                     data-index={index}
    //                     className={
    //                       selectedType === item.value
    //                         ? "selected highlighted"
    //                         : ""
    //                     }
    //                     onClick={() => sort(item.value)}
    //                   >
    //                     {item.name}
    //                   </li>
    //                 );
    //               })}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

// export class ReviewSort extends React.PureComponent {
//   state = {
//     show: false
//   };

//   _toggleMenu = () => {
//     this.setState({
//       show: !this.state.show
//     });
//   };

//   render() {
//     const { show } = this.state;
//     const { type } = this.props;
//     const selectedName = get(
//       find(reviewSortTypes, o => o.value === type),
//       "name",
//       ""
//     );
//     return (
//       <div className="product-testimonials__sorting">
//         <div
//           className={`selectric-wrapper selectric--mini ${
//             show ? "selectric-open selectric-above" : ""
//           }`}
//         >
//           <div className="selectric-hide-select">
//             <select
//               name="sorting"
//               className="mini"
//               value={type}
//               onChange={e => console.log(e)}
//             >
//               {reviewSortTypes.map(item => {
//                 return (
//                   <option key={item.id} value={item.value}>
//                     {item.name}
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//           <div className="selectric">
//             <span className="label">{selectedName}</span>
//             <b className="button" onClick={this._toggleMenu}>
//               <Svg name="ico-select-down" />
//             </b>
//           </div>
//           <div
//             className="selectric-items"
//             tabIndex="-1"
//             style={show ? { width: "100%" } : null}
//           >
//             <div className="selectric-scroll">
//               <ul>
//                 {reviewSortTypes.map((item, index) => {
//                   return (
//                     <li
//                       key={item.id}
//                       data-index={index}
//                       className={
//                         type === item.value ? "selected highlighted" : ""
//                       }
//                     >
//                       {item.name}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
