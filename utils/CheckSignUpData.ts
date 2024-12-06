import React from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function CheckRegisterData(
  username: string,
  password: string,
  repeatPassword: string,
  setErrorUsername: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorPassword: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorRepeat: React.Dispatch<React.SetStateAction<boolean>>
) {
  setErrorUsername(false)
  setErrorPassword(false)
  setErrorRepeat(false)
  if (username == '' || !emailPattern.test(username)) {
    setErrorUsername(true)
    return false
  }

  if (password == '' || password.length < 9) {
    setErrorPassword(true)
    setErrorRepeat(true)
    return false
  }

  if (repeatPassword == '' || password !== repeatPassword) {
    setErrorRepeat(true)
    return false
  }

  return true
}
