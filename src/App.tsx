import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
import styles from './components/Products.module.css'
import Product from './components/Product'
import clsx from 'clsx'
import dessert from './data.json'
import { Dessert } from './types'

function App() {
  const [desserts, setDesserts] = useState<Dessert[]>(dessert)
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const [cart, setCart] = useState<Dessert[]>([])

  const handleIncrement = (name: string) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [name]: (prevQuantities[name] || 0) + 1,
      }
      updateCart(name, newQuantities[name])
      return newQuantities
    })
  }

  const handleDecrement = (name: string) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [name]: Math.max((prevQuantities[name] || 0) - 1, 0),
      }
      updateCart(name, newQuantities[name])
      return newQuantities
    })
  }

  const updateCart = (name: string, quantity: number) => {
    setCart((prevCart) => {
      if (quantity === 0) {
        return prevCart.filter((item) => item.name !== name)
      } else {
        const itemIndex = prevCart.findIndex((item) => item.name === name)
        if (itemIndex === -1) {
          const dessertItem = desserts.find((dessert) => dessert.name === name)
          if (dessertItem) {
            return [...prevCart, { ...dessertItem, quantity }]
          }
        } else {
          const newCart = [...prevCart]
          newCart[itemIndex] = { ...newCart[itemIndex], quantity }
          return newCart
        }
      }
      return prevCart
    })
  }
  console.log(cart)

  return (
    <div className='container'>
      <main className='main-layout'>
        <Products>
          <div className={styles['products-layout']}>
            <h1 className={clsx(styles['products-heading'], 'title--lg')}>
              Desserts
            </h1>
            <ul className={styles.products} role='list'>
              {desserts.map((dessert) => (
                <Product
                  key={dessert.name}
                  dessert={dessert}
                  handleIncrement={() => handleIncrement(dessert.name)}
                  handleDecrement={() => handleDecrement(dessert.name)}
                  quantity={quantities[dessert.name] || 0}
                />
              ))}
            </ul>
          </div>
        </Products>
        <Cart />
      </main>
    </div>
  )
}

export default App
