function setTransfers(transfers) {
  return {
    type: 'SET_TRANSFERS',
    payload: transfers,
  }
}

const removeTransfer = (transfer) => ({
  type: 'REMOVE_TRANSFER',
  payload: transfer,
})

const addTransfer = (transfer) => ({
  type: 'ADD_TRANSFER',
  payload: transfer,
})

function selectAllTransfers() {
  return (dispatch, getState) => {
    const { transfers } = getState()
    if (transfers.transfers.includes('all')) {
      dispatch(setTransfers([]))
    } else {
      dispatch(setTransfers([0, 1, 2, 3, 'all']))
    }
  }
}

function toggleTransfer(transfer) {
  return (dispatch, getState) => {
    const { transfers } = getState()
    if (transfers.transfers.includes(transfer)) {
      dispatch(removeTransfer(transfer))
    } else {
      dispatch(addTransfer(transfer))
    }
  }
}

export { toggleTransfer, selectAllTransfers, setTransfers }
