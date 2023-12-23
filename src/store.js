import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import transfersReducer from './reducers/transfersReducer'
import dataReducer from './reducers/dataReducer'
import selectedOptionReducer from './reducers/selectedOptionReducer'

const store = configureStore({
  reducer: {
    tickets: dataReducer,
    transfers: transfersReducer,
    selectedOption: selectedOptionReducer,
  },
  middleware: [thunk],
})

export default store
