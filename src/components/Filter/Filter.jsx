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

  return (
    <fieldset className={style.filter}>
      <h3 className={style.filter__title}>Количество пересадок</h3>
      <label className={style.filter__checkbox} htmlFor="allStops">
        <input
          className={style.filter__checkbox__input}
          type="checkbox"
          id="allStops"
          name="allStops"
          value="all"
          checked={transfers.includes('all')}
          onChange={() => dispatch(selectAllTransfers())}
        />
        <span className={style.filter__checkbox__span} />
        Все
      </label>
      <label className={style.filter__checkbox} htmlFor="nonStop">
        <input
          className={style.filter__checkbox__input}
          type="checkbox"
          id="nonStop"
          name="nonStop"
          value="0"
          checked={transfers.includes(0)}
          onChange={() => dispatch(toggleTransfer(0))}
        />
        <span className={style.filter__checkbox__span} />
        Без пересадок
      </label>
      <label className={style.filter__checkbox} htmlFor="oneStop">
        <input
          className={style.filter__checkbox__input}
          type="checkbox"
          id="oneStop"
          name="oneStop"
          value="1"
          checked={transfers.includes(1)}
          onChange={() => dispatch(toggleTransfer(1))}
        />
        <span className={style.filter__checkbox__span} />1 пересадка
      </label>
      <label className={style.filter__checkbox} htmlFor="twoStops">
        <input
          className={style.filter__checkbox__input}
          type="checkbox"
          id="twoStops"
          name="twoStops"
          value="2"
          checked={transfers.includes(2)}
          onChange={() => dispatch(toggleTransfer(2))}
        />
        <span className={style.filter__checkbox__span} />2 пересадки
      </label>
      <label className={style.filter__checkbox} htmlFor="threeStops">
        <input
          className={style.filter__checkbox__input}
          type="checkbox"
          id="threeStops"
          name="threeStops"
          value="3"
          checked={transfers.includes(3)}
          onChange={() => dispatch(toggleTransfer(3))}
        />
        <span className={style.filter__checkbox__span} />3 пересадки
      </label>
    </fieldset>
  )
}
