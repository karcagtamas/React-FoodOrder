import { Component, ReactNode } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";

type State = {
  cart: boolean;
};

class App extends Component<{}, State> {
  state: Readonly<State> = { cart: false };

  render(): ReactNode {
    return (
      <CartProvider>
        {this.state.cart && <Cart onClose={this.hideCartHandler} />}
        <Header onShowCart={this.showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    );
  }

  showCartHandler = (): void => {
    this.setState({ cart: true });
  };

  hideCartHandler = (): void => {
    this.setState({ cart: false });
  };
}

export default App;
