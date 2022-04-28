import { Component, ReactNode } from "react";
import styles from "./Input.module.css";

type Props = {
  label: string;
  input: {
    id: string;
    min?: number;
    max?: number;
    type?: "number" | "text";
    step?: number;
    defaultValue?: string;
  };
};

export default class Input extends Component<Props> {
  render(): ReactNode {
    return (
      <div className={styles.input}>
        <label htmlFor={this.props.input.id}>{this.props.label}</label>
        <input {...this.props.input} />
      </div>
    );
  }
}
