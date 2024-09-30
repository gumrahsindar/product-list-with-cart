import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
import styles from './components/Products.module.css'
import Product from './components/Product'
import clsx from 'clsx'
import desserts from './data.json'

function App() {
  const [isActive, setIsActive] = useState(true)
  const [quantity, setQuantity] = useState(1)
  return (
    <div className='container'>
      <main className='main-layout'>
        <Products>
          <div className={styles['products-layout']}>
            <h1 className={clsx(styles['text--base-semibold'], 'title--lg')}>
              Desserts
            </h1>
            <ul className={styles.products} role='list'>
              {desserts.map((dessert) => (
                <Product
                  key={dessert.name}
                  dessert={dessert}
                  isActive={isActive}
                  quantity={quantity}
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
