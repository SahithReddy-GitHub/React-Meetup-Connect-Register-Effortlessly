import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  name: '',
  topic: '',
  onClickRegister: {},
  onChangeName: {},
  onChangeTopic: {},
})

export default RegisterContext
