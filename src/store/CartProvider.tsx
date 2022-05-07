import { ReactNode, Reducer, useReducer } from "react";
import { CartItemModel } from "../models/cart.model";
import CartContext, { IContext } from "./cart-context";

interface CartState {
  items: CartItemModel[];
  total: number;
}

interface CartAction {
  type: string;
  item: unknown;
}

const defaultState: CartState = {
  items: [],
  total: 0,
};

const cartReducer: Reducer<CartState, CartAction> = (
  state: CartState,
  action: CartAction
): CartState => {
  if (action.type === "ADD") {
    const item = action.item as CartItemModel;
    const total = state.total + item.price * item.amount;

    const existingIndex = state.items.findIndex((i) => i.id === item.id);
    const existingItem = state.items[existingIndex];

    let updatedItems: CartItemModel[] = [];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(item);
    }

    return { items: updatedItems, total };
  } else if (action.type === "DELETE") {
    const id = action.item as string;
    const existingIndex = state.items.findIndex((i) => i.id === id);
    const existingItem = state.items[existingIndex];

    const updatedTotal = state.total - existingItem.price;
    let updatedItems: CartItemModel[] = [];

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((i) => i.id !== id);
    } else {
      const updatedItem: CartItemModel = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    }

    return { items: updatedItems, total: updatedTotal };
  }
  return defaultState;
};

const CartProvider = (props: { children?: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = (item: CartItemModel) => {
    dispatch({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatch({ type: "DELETE", item: id });
  };

  const ctx: IContext = {
    items: state.items,
    total: state.total,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
