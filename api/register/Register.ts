import axios from 'axios'

export default async function RegisterUser(
  email: string,
  password: string,
  birth_date: string,
  username: string,
  first_name: string,
  photo: string | null
) {
  try {
    console.log('go')
    const response = await axios.post(`${process.env.HOST_GOALS}/auth/signup`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: {
        birth_date: birth_date,
        email: email,
        password: password,
        username: username,
        first_name: first_name,
        photo: photo
      }
    })

    if (response.status == 200) {
      return response.data
    }
  } catch {
    return Error
  }
}
