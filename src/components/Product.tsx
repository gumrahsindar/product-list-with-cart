import clsx from 'clsx'
import ProductButton from './ProductButton'
import styles from './Product.module.css'
import type { Dessert } from '../types'
import NoProductButton from './NoProductButton'

type ProductProps = {
  dessert: Dessert

  handleIncrement: () => void
  handleDecrement: () => void
  quantity: number
}

export default function Product({
  dessert,
  handleIncrement,
  handleDecrement,
  quantity,
}: ProductProps) {
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
      {quantity > 0 && (
        <ProductButton
          isActive={true}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          quantity={quantity}
        />
      )}
      {quantity === 0 && <NoProductButton onIncrement={handleIncrement} />}

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
