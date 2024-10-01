import clsx from 'clsx'
import styles from './ProductButton.module.css'

type ProductButtonProps = {
  isActive: boolean
  onIncrement: () => void
  onDecrement: () => void
  quantity: number
}

export default function ProductButton({
  isActive,
  onIncrement,
  onDecrement,
  quantity,
}: ProductButtonProps) {
  return (
    <div className={styles['button-wrapper']}>
      <div
        className={clsx(styles['product-button'], 'text--base-semibold', {
          [styles['product-button--active']]: isActive,
        })}
      >
        <button
          onClick={() => onDecrement()}
          className={styles['product-button--decrement']}
          aria-label='decrement quantity'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            fill='none'
            viewBox='0 0 10 2'
          >
            <path fill='#fff' d='M0 .375h10v1.25H0V.375Z' />
          </svg>
        </button>
        <p aria-label={`Quantity: ${quantity}`}>{quantity}</p>
        <button
          onClick={() => onIncrement()}
          className={styles['product-button--increment']}
          aria-label='increment quantity'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            fill='none'
            viewBox='0 0 10 10'
          >
            <path
              fill='#fff'
              d='M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
