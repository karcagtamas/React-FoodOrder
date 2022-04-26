import { Component, ReactNode } from "react";
import styles from "./Card.module.css";

type Props = {
  children: ReactNode;
};

export default class Card extends Component<Props> {
  render(): ReactNode {
    return <div className={styles.card}>{this.props.children}</div>;
  }
}
