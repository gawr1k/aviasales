import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spin } from 'antd'

import fetchData from '../../actions/dataActions'
import Navigation from '../Navigation/Navigation'
import TicketsList from '../TicketsList/TicketsList'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import AlertWindow from '../Allert/Alert'

import style from './App.module.scss'

function App() {
  const { loading } = useSelector((state) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <>
      <AlertWindow />
      <div className={style.container}>
        <Header />
        <main className={style.content}>
          <Filter />
          <div className={style.navigation__container}>
            <Navigation />
            {loading && (
              <Spin tip="Loading tickets" size="large">
                <div className={style.spinner} />
              </Spin>
            )}
            <TicketsList />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
