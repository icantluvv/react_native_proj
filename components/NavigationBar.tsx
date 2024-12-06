import ProfileSVG from '../assets/images/profileIcon.svg'
import ProfileActiveSVG from '../assets/images/profileIconActive.svg'
import SettingsSVG from '../assets/images/settingsIcon.svg'
import SettingsActiveSVG from '../assets/images/settingsIconActive.svg'
import MapSVG from '../assets/images/mapIcon.svg'
import MapActiveSVG from '../assets/images/mapIconActive.svg'
import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

export const NavigationBar = () => {
  const router = useRouter()
  const [select, setSelect] = useState('index')
  const navigateTo = (route: 'index' | 'profile' | 'settings') => {
    try {
      const pathname = route === 'index' ? '/' : `/${route}`
      router.push(pathname as any)
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  function choosePage(option: 'index' | 'profile' | 'settings') {
    setSelect(option)
    navigateTo(option)
  }

  return (
    <View className=" w-full h-[92px] bottom-[0] z-[1000] border-t border-[#e6e6e6] flex-row justify-center items-start pt-[4%] bg-white shadow-s">
      <Pressable
        onPress={() => choosePage('index')}
        className="flex flex-col items-center w-1/3 justify-center gap-y-1"
      >
        {select === 'index' ? (
          <MapActiveSVG width={17} height={20} />
        ) : (
          <MapSVG width={17} height={20} />
        )}
        <Text
          className={`text-[10px] text-shadowText mt-[4px] ${
            select === 'index' ? 'text-black' : 'text-gray-500'
          }`}
        >
          Карта
        </Text>
      </Pressable>
      <Pressable
        onPress={() => choosePage('profile')}
        className="flex flex-col items-center justify-center w-1/3 gap-y-1"
      >
        {select === 'profile' ? (
          <ProfileActiveSVG width={20} height={20} />
        ) : (
          <ProfileSVG width={20} height={20} />
        )}
        <Text
          className={`text-[10px] text-shadowText  mt-[4px] ${
            select === 'profile' ? 'text-black' : 'text-gray-500'
          }`}
        >
          Профиль
        </Text>
      </Pressable>
      <Pressable
        onPress={() => choosePage('settings')}
        className="flex flex-col items-center justify-center w-1/3 gap-y-1"
      >
        {select === 'settings' ? (
          <SettingsActiveSVG width={24} height={24} />
        ) : (
          <SettingsSVG width={24} height={24} />
        )}
        <Text
          className={`text-[10px] text-shadowText ${
            select === 'settings' ? 'text-black' : 'text-gray-500'
          }`}
        >
          Настройки
        </Text>
      </Pressable>
    </View>
  )
}

export default NavigationBar
