import React from 'react'
import './Navigation.scss'
import { useDispatch, useSelector } from 'react-redux'

import toggleSelectedOption from '../../actions/selectedOptionActions'

export default function Navigation() {
  const dispatch = useDispatch()
  const selectedOption = useSelector(
    (state) => state.selectedOption.selectedOption
  )

  const handleOptionChange = (option) => {
    dispatch(toggleSelectedOption(option))
  }

  return (
    <nav className="content__navigation">
      <label htmlFor="cheap" className="content__navigation__label one">
        <input
          type="radio"
          id="cheap"
          name="sorting"
          className="content__navigation__radio"
          checked={selectedOption === 'cheap'}
          onChange={() => handleOptionChange('cheap')}
        />
        Самый дешевый
      </label>

      <label htmlFor="fast" className="content__navigation__label two">
        <input
          type="radio"
          id="fast"
          name="sorting"
          className="content__navigation__radio"
          checked={selectedOption === 'fast'}
          onChange={() => handleOptionChange('fast')}
        />
        Самый быстрый
      </label>

      <label htmlFor="optimal" className="content__navigation__label three">
        <input
          type="radio"
          id="optimal"
          name="sorting"
          className="content__navigation__radio"
          checked={selectedOption === 'optimal'}
          onChange={() => handleOptionChange('optimal')}
        />
        Оптимальный
      </label>
    </nav>
  )
}
