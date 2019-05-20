import React from "react";
//import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";
import NotificationComponent from '../../views/common/Notifications';

import {
  history,
  isSuccess,
 // performWow,
  getRefreshThreshold,
  resetNotification
} from "../../utils";

import {
 // wowActions,
  authActions,
  userActions,
  notificationActions
} from "../../actions";

// import { FallBackLoader } from "./components/Commons";

// const Layout = React.lazy(() => import("./components/Layout"));
// const AdminLayout = React.lazy(() => import("./components/AdminPanel/Layout"));

// import {
//   routes,
//   errorRoutes,
//   adminRoutes,
//   privateRoutes
// } from "./constants/routes";
// import { setInterval } from "timers";

class Notifications extends React.PureComponent {
  checkIfRefreshedInterval = null;
  
  componentDidMount() {
   
    this._hideSpinner();
    this._restCalls();

   // this.props.wowActions.initialize();
  }

  
 
  _restCalls = () => {
    if (!isNull(this.props.user.token)) {
      const refreshThreshold = getRefreshThreshold(this.props.user.expiresAt);
      console.log("refreshThreshold on refresh", refreshThreshold);
      if (!refreshThreshold) {
        return this.props.userActions.fetchAuthUser().then(() => {
          return this.props.userActions.fetchCartCount().then(() => {
            return this.props.notificationActions.fetchCount();
          });
        });
      } else {
        this.checkIfRefreshedInterval = setInterval(() => {
          this._checkIfRefreshed();
        }, 5000);
      }
    }
  };

  /**
   * Fetch Notification on click
   */
  _fetchNotifications = () => {
    return this.props.notificationActions.fetch(1).then(() => {
      if (isSuccess(this.props.notifications)) {
        resetNotification(
          this.props.notificationActions,
          this.props.notifications.data,
          "seen"
        );
      }
    });
  };

  /**
   * Check if token refreshed in interval
   */
  _checkIfRefreshed = () => {
    const refreshThreshold = getRefreshThreshold(this.props.user.expiresAt);
    console.log("checking in interval on refresh", refreshThreshold);
    if (!refreshThreshold) {
      clearInterval(this.checkIfRefreshedInterval._id);
      this._restCalls();
    }
  };

  /**
   * Hide spinner from index.html
   */
  _hideSpinner = () => {
    // const spinner = document.getElementById("spinner");
    // if (spinner && !spinner.hasAttribute("hidden")) {
    //   spinner.setAttribute("hidden", "true");
    // }
  };

  /**
   * Logout
   */
  _logout = () => {
    const { userActions } = this.props;
    userActions.logout().then(() => {
     // performWow(this.props.wowActions);
    });
  };

  render() {
    const {
      user,
      logout,
      cartCount,
     // wowActions,
      userActions,
      headerCategories,
      notificationCount
    } = this.props;
return(
  
    <NotificationComponent 
    user={user}
    logout={logout}
    cartCount={cartCount}
    _logout={this._logout}
    headerCategories={headerCategories}
    notificationCount={notificationCount}
    fetchNotifications={this._fetchNotifications}
    />
)

    // return (
    //   <Router history={history}>
    //     <React.Suspense fallback={<FallBackLoader />}>
    //       <Layout
            // user={user}
            // logout={logout}
            // cartCount={cartCount}
            // _logout={this._logout}
            // headerCategories={headerCategories}
            // notificationCount={notificationCount}
            // fetchNotifications={this._fetchNotifications}
    //       >
    //         <Switch>
    //           {routes.map((item, index) => {
    //             const {
    //               component: Component,
    //               fallbackComponent: FallBackComponent
    //             } = item;

    //             return (
    //               <Route
    //                 key={index}
    //                 exact
    //                 path={item.path}
    //                 render={props =>
    //                   item.path === "/" ? (
    //                     !isNull(user.token) ? (
    //                       <Component user={user} wowActions={wowActions} />
    //                     ) : (
    //                       <FallBackComponent wowActions={wowActions} />
    //                     )
    //                   ) : (
    //                     <Component
    //                       {...props}
    //                       user={user}
    //                       wowActions={wowActions}
    //                       userActions={userActions}
    //                     />
    //                   )
    //                 }
    //               />
    //             );
    //           })}

    //           {privateRoutes.map((item, index) => {
    //             return (
    //               <PrivateRoute
    //                 exact
    //                 user={user}
    //                 key={index}
    //                 path={item.path}
    //                 wowActions={wowActions}
    //                 userActions={userActions}
    //                 component={item.component}
    //               />
    //             );
    //           })}

    //           {adminRoutes.map((item, index) => {
    //             return (
    //               <AdminRoute
    //                 exact
    //                 user={user}
    //                 key={index}
    //                 path={item.path}
    //                 wowActions={wowActions}
    //                 userActions={userActions}
    //                 component={item.component}
    //                 wrapperClass={item.wrapperClass}
    //               />
    //             );
    //           })}

    //           {errorRoutes.map((item, index) => {
    //             const Component = item.component;
    //             return (
    //               <Route
    //                 key={index}
    //                 path={item.path}
    //                 render={() => <Component wowActions={wowActions} />}
    //               />
    //             );
    //           })}
    //         </Switch>
    //       </Layout>
    //     </React.Suspense>
    //   </Router>
    // );
  }
}

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         !isNull(rest.user.token) ? (
//           <Component {...props} {...rest} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// const AdminRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         !isNull(rest.user.token) && rest.user.data.is_admin ? (
//           <AdminLayout wrapperClass={rest.wrapperClass}>
//             <Component {...props} {...rest} />
//           </AdminLayout>
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// eslint-disable-next-line

const mapStateToProps = state => {
  return {
    user: state.user,
    logout: state.logout,
    cartCount: state.cartCount,
    notifications: state.notifications,
    headerCategories: state.headerCategories,
    notificationCount: state.notificationCount
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    notificationActions: bindActionCreators(notificationActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
   // wowActions: bindActionCreators(wowActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
