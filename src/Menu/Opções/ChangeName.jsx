import React from 'react'
import UseAuth from '../../Hooks/UseAuth'
import style from './ChangeName.module.css'

const ChangeName = () => {
  const [newName, setNewName] = React.useState()
  const {changeName} = UseAuth()

  function hamdleChange(evt){
    setNewName(evt.target.value)
  }

  function hamdleClick(){
    console.log(newName)
    changeName(newName)
  }

  return (
    <>
      <div>
        <input type="text" name="changeName" id="changeName" placeholder='Change the name?'
        onChange={hamdleChange} className={style.input}/>
        <button onClick={hamdleClick} className={style.btn}>Change!</button>
      </div>
    </>
  )
}

export default ChangeName
