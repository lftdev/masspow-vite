import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addProduct = (product, quantity) => setCart([...cart, { ...product, quantity, totalPrice: product.price * quantity }])

  const removeProduct = id => setCart(cart.filter(item => item.id !== id))

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}
