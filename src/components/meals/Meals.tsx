import { Component, Fragment, ReactNode } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

export default class Meals extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <MealsSummary />
        <AvailableMeals />
      </Fragment>
    );
  }
}
