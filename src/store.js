import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import transfersReducer from './reducers/transfersReducer';
import dataReducer from './reducers/dataReducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
    transfers: transfersReducer,
  },
  middleware: [thunk],
});

export default store;
