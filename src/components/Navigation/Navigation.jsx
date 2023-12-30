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

  return (
    <nav className={style.content__navigation}>
      <label
        htmlFor="cheap"
        className={
          selectedOption.includes('cheap')
            ? `${style.checked} ${style.content__navigation__label} ${style.one}`
            : `${style.content__navigation__label} ${style.one}`
        }
      >
        <input
          type="radio"
          id="cheap"
          name="sorting"
          className={style.content__navigation__radio}
          onChange={() => handleOptionChange('cheap')}
        />
        Самый дешевый
      </label>

      <label
        htmlFor="fast"
        className={
          selectedOption.includes('fast')
            ? `${style.checked} ${style.content__navigation__label} ${style.two}`
            : `${style.content__navigation__label} ${style.two}`
        }
      >
        <input
          type="radio"
          id="fast"
          name="sorting"
          className={style.content__navigation__radio}
          onChange={() => handleOptionChange('fast')}
        />
        Самый быстрый
      </label>

      <label
        htmlFor="optimal"
        className={
          selectedOption.includes('optimal')
            ? `${style.checked} ${style.content__navigation__label} {style.three}`
            : `${style.content__navigation__label} ${style.three}`
        }
      >
        <input
          type="radio"
          id="optimal"
          name="sorting"
          className={style.content__navigation__radio}
          onChange={() => handleOptionChange('optimal')}
        />
        Оптимальный
      </label>
    </nav>
  )
}
