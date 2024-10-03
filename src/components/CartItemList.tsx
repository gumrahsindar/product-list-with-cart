import type { TCartItem } from '../types'
import styles from './CartItemList.module.css'

type CartItemListProps = {
  cart: TCartItem[]
}

export default function CartItemList({ cart }: CartItemListProps) {
  return (
    <>
      <ul className={styles['cart--items']} role='list'>
        {cart.map((item) => (
          <li key={item.name} className={styles['cart--item']}>
            <div className={styles['cart--item-details']}>
              <p className='text--base-semibold'>{item.name}</p>
              <div className={styles['cart--item-calculation']}>
                <p className='text--base-semibold'>{item.quantity}x</p>
                <p className='text--base'>
                  <span>@</span>${item.price.toFixed(2)}
                </p>
                <p className='text--base-semibold'>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className={styles['cart--button-remove']}
              aria-label='remove item from cart'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10'
                height='10'
                fill='none'
                viewBox='0 0 10 10'
              >
                <path
                  fill='#CAAFA7'
                  d='M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z'
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div className={styles['order--total']}>
        <p className='text--base'>Order Total</p>
        <p className='title--base'>
          $
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </p>
      </div>
    </>
  )
}
