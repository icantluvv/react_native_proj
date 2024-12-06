import React, { useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import SwitcherAndResponse from '@/components/profilePage/payload/SwitcherAndResponse'
import { ScrollView } from 'react-native-gesture-handler'
import InfoUser from '@/components/profilePage/info/InfoUser'
import { useNavigation } from 'expo-router'
import GetSecureStorage from '@/utils/GetSequreStorage'
import GetMe from '@/api/getUserData/GetMe'
import LoadingScreen from '@/components/LoadingScreen'

export default function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataProps | null>(null)
  const [accessToken, setAccessToken] = useState('')
  const navigation = useNavigation()

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await GetSecureStorage('accessToken')
      setAccessToken(token || '')
    }
    fetchAccessToken()
  }, [])

  useEffect(() => {
    const fetchProfileData = async () => {
      if (accessToken) {
        try {
          const response = await GetMe()
          if (response) {
            return setProfileData(response)
          }
          return setProfileData(null)
        } catch (error) {
          console.error('Ошибка при загрузке данных профиля:', error)
        }
      }
    }
    fetchProfileData()
  }, [accessToken])

  useEffect(() => {
    if (profileData !== null) {
      navigation.setOptions({
        title: profileData.username,
        headerShadowVisible: true
      })
    } else {
      navigation.setOptions({ title: '', headerShadowVisible: false })
    }
  }, [navigation, profileData])

  return (
    <SafeAreaView className="bg-white flex-1">
      {profileData ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="w-full flex-1 bg-white items-center gap-y-5 relative">
            <InfoUser profileData={profileData} />
            <SwitcherAndResponse />
          </View>
        </ScrollView>
      ) : (
        <LoadingScreen />
      )}
    </SafeAreaView>
  )
}
