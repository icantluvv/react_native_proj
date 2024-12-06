import AsyncStorage from '@react-native-async-storage/async-storage'

export interface UserDataType {
  email?: string
  password?: string
  [key: string]: any
}

export default class UserData {
  static async saveUserData(data: UserDataType): Promise<void> {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(data))
    } catch (error) {
      console.error('Error saving data:', error)
      throw error
    }
  }

  static async loadUserData(): Promise<UserDataType> {
    try {
      const data = await AsyncStorage.getItem('userData')
      return data ? JSON.parse(data) : {}
    } catch (error) {
      console.error('Error loading data:', error)
      return {}
    }
  }

  static async clearUserData(): Promise<void> {
    try {
      await AsyncStorage.removeItem('userData')
    } catch (error) {
      console.error('Error clearing data:', error)
      throw error
    }
  }
}

export const { saveUserData, loadUserData, clearUserData } = UserData