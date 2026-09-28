import React from 'react'
import { createContext, useContext } from 'react'
import { initialProducts } from '../data/Product';

const CartContext = createContext();


export const CartProvider = (props) => {

  const products = initialProducts;
  console.log("products data is here<><><><>", products);

  return (
    <CartContext.Provider value={{products}}>{props.children}</CartContext.Provider>
  )
}

//Create own hook

export const useCart =  () => useContext(CartContext);

