import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
import styles from './components/Products.module.css'
import Product from './components/Product'
import clsx from 'clsx'
import dessert from './data.json'
import Container from './components/Container'

function App() {
  return (
    <Container>
      <Products>
        <div className={styles['products-layout']}>
          <h1 className={clsx(styles['products-heading'], 'title--lg')}>
            Desserts
          </h1>
          <ul className={styles.products} role='list'>
            {dessert.map((dessertItem) => (
              <Product key={dessertItem.name} dessert={dessertItem} />
            ))}
          </ul>
        </div>
      </Products>
      <Cart />
    </Container>
  )
}

export default App
