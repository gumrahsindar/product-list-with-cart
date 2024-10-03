import clsx from 'clsx'
import styles from './ProductButton.module.css'
export default function NoProductButton({
  onIncrement,
}: {
  onIncrement: () => void
}) {
  return (
    <div className={styles['button-wrapper']}>
      <button
        onClick={() => onIncrement()}
        className={clsx(styles['product-button'], 'text--base-semibold')}
      >
        <span className={styles['img-add-to-cart']}></span>
        Add to cart
      </button>
    </div>
  )
}
