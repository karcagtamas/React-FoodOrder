import { Component, Fragment, ReactNode } from "react";
import Header from "./components/layout/Header";

class App extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default App;
