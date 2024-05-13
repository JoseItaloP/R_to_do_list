import React, { useEffect } from 'react'
import Unknown from '../assets/images/Unknown_person.jpg'
import UseAuth from '../Hooks/UseAuth'
import Options from './Opções/Options'

import style from './Header.module.css'

const Header = () => {
  const {user, name, img} = UseAuth();
 

  return (
    <header className={style.elements}>
      <img src={img ? `${img}` : Unknown} alt="Perfil Image"/>
      <section className={style.section}>
          <div className={style.div1}>
            <h1>{name ? name : user.username}</h1>
          </div>
          <div className={style.div2}>
            <Options />
          </div>
      </section>
    </header>
  )
}

export default Header
