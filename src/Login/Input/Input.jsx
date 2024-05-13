import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, nome, value, onChange}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={nome}>{label}</label>
      <input id={nome} name={nome} type={type} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input
