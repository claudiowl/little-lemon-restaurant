import React from 'react'
import styles from './common.module.css'

/**
 * @param {{
 *   variant?: 'primary' | 'secondary' | 'danger'| 'link',
 *   disabled?: boolean,
 *   loading?: boolean,
 *   onClick?: () => void,
 *   children: React.ReactNode
 * }} props
 */
// Button.jsx
const Button = ({
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick = () => {},
  type = 'button', // Add type prop
  children,
  ...rest
}) => {
  const className = [
    styles.btn,
    styles[`btn--${variant}`],
    (disabled || loading) ? styles['btn--disabled'] : ''
  ].join(' ');

  return (
    <button
      type={type} // Pass the type prop
      className={className}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;