import { useEffect, useState } from "react";
import { MealModel } from "../../models/meal.model";
import Card from "../ui/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState<MealModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://react-demo-4191e-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      const loadedMeals: MealModel[] = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error: Error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles["meals-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles["meals-error"]}>
        <p>{error}</p>
      </section>
    );
  }

  const generate = (): JSX.Element[] => {
    return meals.map((m: MealModel) => (
      <MealItem
        key={m.id}
        id={m.id}
        name={m.name}
        description={m.description}
        price={m.price}
      ></MealItem>
    ));
  };

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{generate()}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
