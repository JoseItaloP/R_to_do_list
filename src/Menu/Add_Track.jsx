import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from './Add_Track.module.css'

const Add_Track = ({onclick}) => {
  return (
    <button className={styles.box} onClick={onclick}>
        <AiOutlinePlusCircle className={styles.icon}/>
    </button>
  )
}

export default Add_Track
