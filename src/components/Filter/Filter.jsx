import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  toggleTransfer,
  selectAllTransfers,
  setTransfers,
} from '../../actions/transfersActions'

import style from './Filter.module.scss'

export default function Filter() {
  const { transfers } = useSelector((state) => state.transfers)
  const dispatch = useDispatch()

  useEffect(() => {
    if (transfers.length >= 4 && !transfers.includes('all')) {
      dispatch(setTransfers([0, 1, 2, 3, 'all']))
    }
    if (transfers.length === 4 && transfers.includes('all')) {
      dispatch(setTransfers(transfers.filter((item) => item !== 'all')))
    }
  }, [transfers, dispatch])

  const handleCheckboxChange = (id) => {
    if (id === 'all') {
      dispatch(selectAllTransfers())
    } else {
      dispatch(toggleTransfer(id))
    }
  }

  const options = [
    { id: 'all', label: 'Все', class: 'allStops' },
    { id: 0, label: 'Без пересадок', class: 'nonStop' },
    { id: 1, label: '1 пересадка', class: 'oneStop' },
    { id: 2, label: '2 пересадки', class: 'twoStops' },
    { id: 3, label: '3 пересадки', class: 'threeStops' },
  ]

  return (
    <fieldset className={style.filter}>
      <h3 className={style.filter__title}>Количество пересадок</h3>
      {options.map((option) => (
        <label className={style.filter__checkbox} htmlFor={option.class}>
          <input
            className={style.filter__checkbox__input}
            type="checkbox"
            id={option.class}
            name={option.class}
            value={option.id}
            checked={transfers.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
          <span className={style.filter__checkbox__span} />
          {option.label}
        </label>
      ))}
    </fieldset>
  )
}
