import { Component, ReactNode } from "react";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

type Props = {
  onClick: () => void;
};

export default class HeaderCartButton extends Component<Props> {
  render(): ReactNode {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
      </button>
    );
  }
}
