import * as SecureStore from 'expo-secure-store'

export default async function RemoveSecureItem(key: string) {
  await SecureStore.deleteItemAsync(key)
}
