import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let exist = cart.some((elemento) => elemento.id === item.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, quantity: item.quantity };
        } else return elemento;
      });
      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    console.log(id);
    setCart(cart.filter((elemento) => elemento.id !== id));
  };

  //Calcular el total
  const getTotalPrice = () => {
    let total = cart.reduce((acc, producto) => {
      return acc + producto.price * producto.quantity;
    }, 0);
    return total;
  };

  //Calcular la cantidad de productos
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, producto) => {
      return acc + producto.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    const product = cart.find((e) => e.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
