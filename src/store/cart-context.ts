import React from "react";
import { CartItemModel } from "../models/cart.model";

export interface IContext {
  items: CartItemModel[];
  total: number;
  addItem: (item: CartItemModel) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext({
  items: [],
  total: 0,
  addItem: (item: CartItemModel) => {},
  removeItem: (id: string) => {},
} as IContext);

export default CartContext;
