import { useSelector } from 'react-redux'
import { Alert, Button } from 'antd'

import style from './Alert.module.scss'

export default function AlertWindow() {
  const errorMessage = useSelector((state) => state.tickets.errorMessage)

  if (errorMessage === null) {
    return null
  }

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={style.overlay}>
      <Alert
        message={errorMessage}
        description="Произошла ошибка при загрузке билетов. Пожалуйста, повторите попытку позже."
        type="error"
        showIcon
        action={
          <Button size="small" danger onClick={reloadPage}>
            Перезагрузить страницу
          </Button>
        }
      />
    </div>
  )
}
