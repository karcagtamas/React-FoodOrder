import { Component, Fragment, ReactNode } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default class Header extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <header className={styles.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton />
        </header>
        <div className={styles["main-image"]}>
          <img src={mealsImage} alt="Meals" />
        </div>
      </Fragment>
    );
  }
}
