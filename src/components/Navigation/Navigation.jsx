import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import toggleSelectedOption from '../../actions/selectedOptionActions'

import style from './Navigation.module.scss'

export default function Navigation() {
  const dispatch = useDispatch()
  const selectedOption = useSelector(
    (state) => state.selectedOption.selectedOption
  )

  const handleOptionChange = (option) => {
    dispatch(toggleSelectedOption(option))
  }

  const options = [
    { id: 'cheap', label: 'Самый дешевый', class: 'one' },
    { id: 'fast', label: 'Самый быстрый', class: 'two' },
    { id: 'optimal', label: 'Оптимальный', class: 'three' },
  ]

  return (
    <nav className={style.content__navigation}>
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={option.id}
          className={
            selectedOption.includes(option.id)
              ? `${style.checked} ${style.content__navigation__label} ${
                  style[option.class]
                }`
              : `${style.content__navigation__label} ${style[option.class]}`
          }
        >
          <input
            name="sorting"
            type="radio"
            id={option.id}
            onChange={() => handleOptionChange(option.id)}
            className={style.content__navigation__radio}
          />
          {option.label}
        </label>
      ))}
    </nav>
  )
}
