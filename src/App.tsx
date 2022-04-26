import { Component, Fragment, ReactNode } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

class App extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Header />
        <main>
          <Meals />
        </main>
      </Fragment>
    );
  }
}

export default App;
