import React from 'react'
import { TCartItem } from '../types'

import styles from './ConfirmModal.module.css'
import CartButton from './CartButton'

type ConfirmModalProps = {
  cart: TCartItem[]
  onClose: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  cart,
  onClose,
}: ConfirmModalProps) => {
  return (
    <div className={styles['modal--overlay']}>
      <div className={styles['modal--wrapper']}>
        <div className={styles['modal--header']}>
          <img
            src='/images/icon-order-confirmed.svg'
            width={48}
            height={48}
            alt=''
          />
          <h2 className='title--lg'>Order Confirmed</h2>
        </div>
        <div className={styles['modal--content']}>
          <ul role='list'>
            {cart.map((item) => (
              <li key={item.name} className={styles['cart--item']}>
                <img
                  src={item.image.thumbnail}
                  width={48}
                  height={48}
                  alt={item.name}
                />
                <div className={styles['cart--item-details']}>
                  <p className='text--base-semibold'>{item.name}</p>
                  <div className={styles['cart--item-calculation']}>
                    <p className='text--base-semibold'>{item.quantity}x</p>
                    <p className='text--base'>
                      <span>@</span>${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className='text--base-semibold'>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
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
        </div>
        <CartButton onClick={onClose}>Start New Order</CartButton>
      </div>
    </div>
  )
}

export default ConfirmModal
