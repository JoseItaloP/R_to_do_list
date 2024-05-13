import React from 'react'
import UseAuth from '../../../Hooks/UseAuth'

const DeleteTrack = ({chave}) => {
  const {user, store} = UseAuth()

   
    function HamdleClick(){
        const usuario = JSON.parse(localStorage.getItem(`user_content:${user.username}`))
        localStorage.removeItem(`user_content:${user.username}`)
        usuario.map((content)=>{
          console.log(chave.chave)
          if(content.key !== chave.chave) {
            let valueFinal = []
            valueFinal.push(content)
            store( valueFinal, user.username)
            console.log(valueFinal, user.username)
          }
        })
        location.reload()
    }

   


  return (
    <button className='button' onClick={HamdleClick}>
      Delet
    </button>
  )
}

export default DeleteTrack
