import { FormEvent, useRef, useState } from "react";
import Input from "../../ui/Input";
import styles from "./MealItemForm.module.css";

type Props = {
  onAddToCart: (value: number) => void;
};

const MealItemForm = (props: Props) => {
  const [valid, setValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const amount = amountInputRef.current?.value ?? "0";
    const amountValue = +amount;

    if (amount.trim().length === 0 || amountValue < 1 || amountValue > 5) {
      setValid(false);
      return;
    }

    props.onAddToCart(amountValue);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!valid && <p>Please enter a valud amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
