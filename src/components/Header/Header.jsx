import React from 'react'

import Logo from '../../asssets/Logo.png'

import style from './Header.module.scss'

export default function Header() {
  return (
    <header className={style.header}>
      <img className={style.header__logo} src={Logo} alt="Logo-aviasales" />
    </header>
  )
}
