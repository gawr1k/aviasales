/* eslint-disable import/no-extraneous-dependencies */
import { message } from 'antd'

const showErrorMessage = (errorMessage) => {
  message.error(errorMessage)
}

export default {
  showErrorMessage,
}
