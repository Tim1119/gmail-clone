import { configureStore } from '@reduxjs/toolkit'
import mailReducer from './MailContext'

export default configureStore({
  reducer: {
    mail: mailReducer,
  },
})