import clsx from 'clsx'
import styles from './Cart.module.css'

export default function Cart() {
  return (
    <section>
      <div className={styles['cart--wrapper']}>
        <h2 className={clsx(styles['cart--header'], 'title--base')}>
          Your Cart (0)
        </h2>
        <ul className={styles['cart--items']} role='list'>
          <li className={styles['cart--item']}>
            <div className={styles['cart--item-details']}>
              <p className='text--base-semibold'>Classic Tiramisu</p>
              <div className={styles['cart--item-calculation']}>
                <p className='text--base-semibold'>1x</p>
                <p className='text--base'>
                  <span>@</span>$5.50
                </p>
                <p className='text--base-semibold'>$5.50</p>
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
          <li className={styles['cart--item']}>
            <div className={styles['cart--item-details']}>
              <p className='text--base-semibold'>Vanilla Bean Crème Brûlée</p>
              <div className={styles['cart--item-calculation']}>
                <p className='text--base-semibold'>4x</p>
                <p className='text--base'>
                  <span>@</span>$7.00
                </p>
                <p className='text--base-semibold'>$28.00</p>
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
          <div className={styles['order--total']}>
            <p className='text--base'>Order Total</p>
            <p className='title--base'>$46.50</p>
          </div>
          <div className={styles['delivery--type']}>
            <img src='/images/icon-carbon-neutral.svg' alt='' />
            <p className='text--base'>
              This is a{' '}
              <strong className='text--base-semibold'>carbon neutral </strong>
              delivery
            </p>
          </div>
          <button className={clsx(styles['btn--start-order'], 'text--lg')}>
            Confirm Order
          </button>
        </ul>

        {/* empty cart
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
        </div> */}
      </div>
    </section>
  )
}
