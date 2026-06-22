import { Link } from 'react-router-dom'
import styles from './CTAButton.module.css'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary'
  to?: string
  href?: string
  onClick?: () => void
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export function CTAButton({
  variant = 'primary',
  to,
  href,
  onClick,
  children,
  size = 'md',
  fullWidth = false,
}: CTAButtonProps) {
  const className = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return <Link to={to} className={className}>{children}</Link>
  }

  if (href) {
    return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  )
}
