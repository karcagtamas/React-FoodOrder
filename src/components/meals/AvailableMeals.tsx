import { Component, ReactNode } from "react";
import Card from "../ui/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default class AvailableMeals extends Component {
  render(): ReactNode {
    return (
      <section className={styles.meals}>
        <Card>
          <ul>{this.meals()}</ul>
        </Card>
      </section>
    );
  }

  meals(): JSX.Element[] {
    return DUMMY_MEALS.map((m) => (
      <MealItem
        key={m.id}
        id={m.id}
        name={m.name}
        description={m.description}
        price={m.price}
      ></MealItem>
    ));
  }
}
