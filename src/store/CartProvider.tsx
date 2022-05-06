import {
  ReactNode,
  Reducer,
  ReducerAction,
  ReducerWithoutAction,
  useReducer,
} from "react";
import { CartItem } from "../models/cart.model";
import CartContext, { IContext } from "./cart-context";

interface CartState {
  items: CartItem[];
  total: number;
}

enum CartAction {}

const defaultState: CartState = {
  items: [],
  total: 0,
};

const cartReducer: Reducer<CartState, CartAction> = (
  state: CartState,
  action: CartAction
): CartState => {
  return defaultState;
};

const CartProvider = (props: { children?: ReactNode }) => {
  const [state, dispatchState] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (item: CartItem) => {};

  const removeItemFromCartHandler = (id: string) => {};

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
