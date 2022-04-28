import { Component, ReactNode } from "react";
import Modal from "../ui/Modal";
import styles from "./Cart.module.css";

type Props = {
  onClose: () => void;
};

export default class Cart extends Component<Props> {
  items = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  render(): ReactNode {
    return (
      <Modal onClose={this.props.onClose}>
        {this.items}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={styles.actions}>
          <button
            className={styles["button--alt"]}
            onClick={this.props.onClose}
          >
            Close
          </button>
          <button className={styles.button}>Order</button>
        </div>
      </Modal>
    );
  }
}
