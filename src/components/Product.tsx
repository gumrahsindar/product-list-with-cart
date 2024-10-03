import clsx from 'clsx'
import ProductButton from './ProductButton'
import styles from './Product.module.css'
import type { Dessert } from '../types'
import NoProductButton from './NoProductButton'
import { useCartContext } from '../hooks/useCartContext'

type ProductProps = {
  dessert: Dessert
}

export default function Product({ dessert }: ProductProps) {
  const { cart, handleDecrement, handleIncrement } = useCartContext()

  const quantity =
    cart.find((item) => item.name === dessert.name)?.quantity ?? 0

  const showProductButton = cart.length > 0 && quantity > 0

  return (
    <li>
      <picture>
        <source srcSet={dessert.image.mobile} media='(max-width: 32rem)' />
        <source srcSet={dessert.image.tablet} media='(max-width: 48rem)' />
        <img
          className={clsx(styles['products--img'], {
            [styles['products--img-active']]: quantity > 0,
          })}
          src={dessert.image.desktop}
          alt={dessert.name}
          width={450}
          height={450}
        />
      </picture>
      {showProductButton && (
        <ProductButton
          isActive={true}
          onIncrement={() => handleIncrement(dessert)}
          onDecrement={() => handleDecrement(dessert)}
          quantity={quantity}
        />
      )}
      {!showProductButton && (
        <NoProductButton onIncrement={() => handleIncrement(dessert)} />
      )}

      <p className={clsx(styles['dessert--category'], 'text--base')}>
        {dessert.category}
      </p>
      <p className={clsx(styles['dessert--name'], 'text--lg')}>
        {dessert.name}
      </p>
      <p className={clsx(styles['dessert--price'], 'text--lg')}>
        ${dessert.price.toFixed(2)}
      </p>
    </li>
  )
}
