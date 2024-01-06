import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

import dataReducer from './reducers/dataReducer'
import selectedOptionReducer from './reducers/selectedOptionReducer'
import transfersReducer from './reducers/transfersReducer'

const store = configureStore({
  reducer: {
    tickets: dataReducer,
    transfers: transfersReducer,
    selectedOption: selectedOptionReducer,
  },
  middleware: [thunk],
})

export default store
