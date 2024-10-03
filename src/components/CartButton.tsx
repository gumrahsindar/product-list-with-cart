import clsx from 'clsx'
import styles from './OrderButton.module.css'

type CartButtonProps = {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
  children: React.ReactNode
  onClick: () => void
}

export default function CartButton({
  props,
  children,
  onClick,
}: CartButtonProps) {
  return (
    <button
      {...props}
      className={clsx(styles['btn--start-order'], 'text--lg')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
