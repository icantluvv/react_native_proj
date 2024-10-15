import React from 'react'
import { View, Text, Pressable, Linking, Platform, Image } from 'react-native'
import { useNavigation } from 'expo-router'

export default function Settings() {
  const navigation = useNavigation()

  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:')
    } else {
      Linking.openSettings()
    }
  }

  const navigateTo = (route: string) => {
    try {
      navigation.navigate(route)
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  return (
    <View className="items-center w-full px-[5%] transition-all duration-200 py-[10%] gap-y-5">
      <View className="w-full rounded-[5px] py-2 gap-y-3">
        <Text className="ml-3 text-[14px] text-shadowText">
          Настройки профиля
        </Text>
        <View className="w-full bg-white rounded-[5px] py-2">
          <Pressable
            className="active:bg-hoverButton p-4 relative"
            onPress={() => navigateTo('(settings)/accountEdit')}
          >
            <Text className="text-[16px]">Аккаунт</Text>
            <Image
              src={'../../assets/images/BackButton.svg'}
              className="w-[20px] h-[20px] absolute"
            ></Image>
          </Pressable>
          <Pressable
            className="active:bg-hoverButton p-4 "
            onPress={() => navigateTo('(settings)/confidences')}
          >
            <Text className="text-[16px]">Конфиденциальность</Text>
          </Pressable>
        </View>
      </View>

      <View className="w-full rounded-[5px] py-2 gap-y-3">
        <Text className="ml-3 text-[14px] text-shadowText">
          Настройки приложения
        </Text>
        <View className="w-full bg-white rounded-[5px] py-2">
          <Pressable
            className="active:bg-hoverButton p-4"
            onPress={() => navigateTo('(settings)/notifications')}
          >
            <Text className="text-[16px]">Уведомления</Text>
          </Pressable>
          <Pressable
            className="active:bg-hoverButton p-4"
            onPress={openAppSettings}
          >
            <Text className="text-[16px]">Доступ</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
