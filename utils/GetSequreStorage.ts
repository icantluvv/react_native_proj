import * as SecureStore from 'expo-secure-store'

export default async function GetSecureStorage(key: string) {
  const accessToken = await SecureStore.getItemAsync(key)
  if (accessToken) {
    return accessToken
  }
  return null
}
