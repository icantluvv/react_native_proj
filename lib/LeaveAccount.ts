import RemoveSecureItem from '@/utils/RemoveSecureItem'
import * as SecureStore from 'expo-secure-store'

export default async function LeaveAccount() {
  const accessToken = SecureStore.getItem('accessToken')

  if (accessToken) {
    return await RemoveSecureItem('accessToken')
  }
  return Error
}
