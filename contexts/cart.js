import { createContext, useContext, useState } from 'react';
import currency from 'currency.js';
import storage from '../helper/storage';
import { calcSubTotal, calcTotalTax, addToCart, removeFromCart, removeAllFromCart, clearCart } from '../helper/lib';

const Props = {
  products: [],
  productsNumber: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
  AddToCart: () => { },
  RemoveFromCart: () => { },
};

export const CartContext = createContext(Props);

export const CartProvider = (props) => {
  const [products, setProducts] = useState(storage.get('cart'));

  // const productsNumber = products.length;

  const subTotal = currency(calcSubTotal(products)).value;

  const tax = currency(calcTotalTax(products)).value;

  const total = currency(currency(subTotal).value + currency(tax).value).value;

  const AddToCart = (item, quantity) => {
    addToCart(item, quantity);
    setProducts(storage.get('cart'));
  };

  const RemoveFromCart = (item) => {
    removeFromCart(item);

    setProducts(storage.get('cart'));
  };
  const RemoveAllFromCart = (item) => {
    removeAllFromCart(item);

    setProducts(storage.get('cart'));
  };

  const ClearCart = () => {
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        products,
        subTotal,
        tax,
        total,
        AddToCart,
        RemoveFromCart,
        RemoveAllFromCart,
        ClearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
