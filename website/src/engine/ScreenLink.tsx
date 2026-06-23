/* NAS CodeWorks — Screen Engine · ScreenLink
 * Drop-in replacement for react-router <Link>: renders a real <a href> (deep-linkable,
 * middle-click friendly) but drives the Screen Engine on normal clicks.
 */
import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { useNavigator } from './engineContext'

interface ScreenLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
}

export function ScreenLink({ to, onClick, children, ...rest }: ScreenLinkProps) {
  const { navigate, resolvePath } = useNavigator()
  const screenId = resolvePath(to)

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    // Respect modifier keys / non-primary buttons → let the browser handle it.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (!screenId) return // unknown target → default anchor behavior
    e.preventDefault()
    navigate(screenId)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
