import './App.scss'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spin } from 'antd'

import fetchData from './actions/dataActions'
import Navigation from './components/Navigation/Navigation'
import TicketsList from './components/TicketsList/TicketsList'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'

function App() {
  const { loading } = useSelector((state) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className="container">
      <Header />
      <main className="content">
        <Filter />
        <div className="navigation__container">
          <Navigation />
          {loading && (
            <Spin tip="Loading tickets" size="large">
              <div className="spinner" />
            </Spin>
          )}
          <TicketsList />
        </div>
      </main>
    </div>
  )
}

export default App
