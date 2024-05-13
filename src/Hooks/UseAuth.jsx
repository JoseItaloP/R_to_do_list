import React from 'react'
import { AuthContext } from '../Context/Auth'


const UseAuth = () => {
    const context = React.useContext(AuthContext)
  return context
}

export default UseAuth
