import { Component, ReactNode } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

type Props = {
  name: string;
  description: string;
  price: number;
};

export default class MealItem extends Component<Props> {
  render(): ReactNode {
    const price = `$${this.props.price.toFixed(2)}`;

    return (
      <li className={styles.meal}>
        <div>
          <h3>{this.props.name}</h3>
          <div className={styles.description}>{this.props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>
          <MealItemForm></MealItemForm>
        </div>
      </li>
    );
  }
}
