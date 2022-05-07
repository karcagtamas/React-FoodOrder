import { useContext } from "react";
import { CartItemModel } from "../../models/cart.model";
import CartContext from "../../store/cart-context";
import Modal from "../ui/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

type Props = {
  onClose: () => void;
};

const Cart = (props: Props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.total.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item: CartItemModel) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const items = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {items}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
