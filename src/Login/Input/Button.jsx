import React from 'react'
import styles from './Button.module.css'

const Button = ({children, onSubmit, ...props}) => {
  return (
    <button {...props} className={styles.btn} onSubmit={onSubmit}>
      {children}
    </button>
  )
}

export default Button
