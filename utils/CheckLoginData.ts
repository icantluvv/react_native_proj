export default function LoginAuth(
  password: string,
  login: string,
  setErrorLogin: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorPassword: React.Dispatch<React.SetStateAction<boolean>>
) {
  let isValid = true

  if (login === '') {
    setErrorLogin(true)
    isValid = false
  } else {
    setErrorLogin(false)
  }

  if (password === '') {
    setErrorPassword(true)
    isValid = false
  } else {
    setErrorPassword(false)
  }

  return isValid
}
