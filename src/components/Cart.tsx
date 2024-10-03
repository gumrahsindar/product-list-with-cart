import { useState } from 'react'
import clsx from 'clsx'
import styles from './Cart.module.css'
import CartItemList from './CartItemList'
import ConfirmModal from './ConfirmModal'
import CartButton from './CartButton'
import { TCartItem } from '../types'

type CartProps = {
  cart: TCartItem[]
}

export default function Cart({ cart }: CartProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConfirmOrder = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section>
      <div className={styles['cart--wrapper']}>
        <h2 className={clsx(styles['cart--header'], 'title--base')}>
          Your Cart ({cart.length})
        </h2>
        {cart.length > 0 ? (
          <>
            <CartItemList cart={cart} />
            <div className={styles['delivery--type']}>
              <img src='/images/icon-carbon-neutral.svg' alt='' />
              <p className='text--base'>
                This is a{' '}
                <strong className='text--base-semibold'>carbon neutral</strong>{' '}
                delivery
              </p>
            </div>
            <CartButton onClick={handleConfirmOrder}>Confirm Order</CartButton>
          </>
        ) : (
          <div className={styles['desc--wrapper']}>
            <img
              style={{ margin: '0 auto' }}
              src='/images/illustration-empty-cart.svg'
              width={128}
              height={128}
              alt=''
            />
            <p className={clsx(styles['cart--desc'], 'text--base-semibold')}>
              Your added items will appear here
            </p>
          </div>
        )}
      </div>
      {isModalOpen && <ConfirmModal cart={cart} onClose={handleCloseModal} />}
    </section>
  )
}
