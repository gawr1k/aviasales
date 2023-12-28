import { message } from 'antd'

const showErrorMessage = (errorMessage) => {
  message.error(errorMessage)
}

export default {
  showErrorMessage,
}
