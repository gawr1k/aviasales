import React from 'react'

import './Header.scss'
import Logo from '../../asssets/Logo.png'

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Logo-aviasales" />
    </header>
  )
}
