import { Component, ReactNode } from "react";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

export default class HeaderCartButton extends Component {
  render(): ReactNode {
    return (
      <button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
      </button>
    );
  }
}
