import React from 'react'
import { useNavigate } from 'react-router-dom'
import UseAuth from '../../Hooks/UseAuth'
import Button from '../../Login/Input/Button'

const SingOut = () => {
    const {signout} = UseAuth()
    const navigate = useNavigate()

    function hamdleClick(){
        signout()
        navigate('/')
        location.reload()
    }
  return (
    < >
        <Button onClick={hamdleClick}>
            SingOut
        </Button>
    </>
  )
}

export default SingOut
