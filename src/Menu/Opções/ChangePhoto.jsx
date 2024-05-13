import React from 'react'

import style from './ChangePhoto.module.css'
import UseAuth from '../../Hooks/UseAuth'

const ChangePhoto = () => {
  const [newImg, setNewImg] = React.useState()
  const {changeImg} = UseAuth()

    function hamdleChange(evt){
      setNewImg(evt.target.value)
    }

    function hamdleClick(){
      changeImg(newImg)
    }
  return (
    <>
      <div className={style.box}>
        <input type="text" name="url" id="url" placeholder='URL'
        onChange={hamdleChange} className={style.input}/>
        <button onClick={hamdleClick} className={style.btn}>Change Image?</button>
      </div>
    </>
  )
}

export default ChangePhoto
