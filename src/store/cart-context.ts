import React from "react";
import { CartItem } from "../models/cart.model";

export interface IContext {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext({
  items: [],
  total: 0,
  addItem: (item: CartItem) => {},
  removeItem: (id: string) => {},
} as IContext);

export default CartContext;
