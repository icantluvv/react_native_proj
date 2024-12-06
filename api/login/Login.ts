import axios from 'axios'

export default async function LoginApi(login: string, password: string) {
  try {
    const response = await axios.post(
      `https://do-goals.online/api/auth/login`,
      new URLSearchParams({
        login: login,
        password: password
      }).toString(),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )

    const accessToken = response.data.access_token

    return accessToken
  } catch {
    Error
  }
}
