import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

type Props = {
  onClick: () => void;
};

const HeaderCartButton = (props: Props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
