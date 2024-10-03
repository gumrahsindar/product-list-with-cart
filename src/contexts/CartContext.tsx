import { createContext, useState } from 'react'
import { Dessert, TCartItem } from '../types'

type TCartContext = {
  cart: TCartItem[]
  handleIncrement: (dessert: Dessert) => void
  handleDecrement: (dessert: Dessert) => void
}

export const CartContext = createContext<TCartContext | null>(null)

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<TCartItem[]>([])

  const handleIncrement = (dessert: Dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dessert.name)
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }]
      }
    })
  }

  const handleDecrement = (dessert: Dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dessert.name)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      } else {
        return prevCart.filter((item) => item.name !== dessert.name)
      }
    })
  }

  const value = {
    cart,
    handleIncrement,
    handleDecrement,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
