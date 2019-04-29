import React from "react";
import { FallBackLoader } from "../../components/Commons";
import { performWow } from "../../utils";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    componentDidCatch(error, info) {
      console.group("Component caught error");
      console.log("error : ", error);
      console.log("error info  : ", info);
      console.groupEnd();
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState(
        {
          component
        },
        () => {
          window.scrollTo(0, 0);
          performWow(this.props.wowActions);
        }
      );
    }

    componentWillUnmount() {
      this.setState({ component: null });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : <FallBackLoader />;
    }
  }

  return AsyncComponent;
}
