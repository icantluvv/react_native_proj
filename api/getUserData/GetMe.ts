import GetSecureStorage from '@/utils/GetSequreStorage'
import axios from 'axios'

export default async function GetMe() {
  const accessToken = await GetSecureStorage('accessToken')

  try {
    const response = await axios.get(`https://do-goals.online/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (response) {
      return response.data
    }
  } catch {
    return Error
  }
}
