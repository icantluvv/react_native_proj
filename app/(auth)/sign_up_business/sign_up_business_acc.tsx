import { router } from 'expo-router'
import { Pressable, Text, View, Image, StatusBar } from 'react-native'

import { TextInput } from 'react-native-gesture-handler'
import React from 'react'

export default function SignUpBusiness() {
  return (
    <View className="px-[5%] pt-[17vh] bg-white pb-[4.5vh] justify-between flex-col h-screen">
      <StatusBar barStyle="dark-content"></StatusBar>
      <View>
        <Text className="text-[28px] w-[90%] font-bold">
          Добро пожаловать в Goals для бизнеса
        </Text>

        <View className="gap-y-4 mt-[10%]">
          <TextInput
            placeholder="ОГРН/ИНН организации"
            className="p-4 placeholder:text-shadowText border rounded-[12px] border-hoverButton"
          ></TextInput>
          <TextInput
            placeholder="Адрес электронной почты"
            className="p-4 placeholder:text-shadowText border rounded-[12px] border-hoverButton"
          ></TextInput>
          <Text>Почта указывается автоматически из выписки ЕГРЮЛ*</Text>
          <TextInput
            placeholder="Пароль"
            className="p-4 placeholder:text-shadowText border rounded-[12px] border-hoverButton"
          ></TextInput>
          <TextInput
            placeholder=" Повторение пароля"
            className="p-4 placeholder:text-shadowText border rounded-[12px] border-hoverButton"
          ></TextInput>
        </View>

        <Pressable className="bg-[#171717] active:bg-activeBlackButton h-[48px] mt-[7%] rounded-[12px] justify-center items-center">
          <Text className="text-white text-[14px] font-semibold">
            Следующий шаг
          </Text>
        </Pressable>

        <View className="flex-row justify-center mt-[7%]">
          <Text className="text-shadowText">Уже есть аккаунт? </Text>
          <Pressable
            className="active:opacity-50"
            onPress={() => {
              router.push('/log_in')
            }}
          >
            <Text className="font-medium">Войти</Text>
          </Pressable>
        </View>
        <View className="flex-row justify-center mt-[5%]">
          <Text className="text-shadowText">Нет бизнеса? </Text>
          <Pressable
            className="active:opacity-50"
            onPress={() => router.push('/(auth)/sign_up_user/sign_up')}
          >
            <Text className="font-medium">Создать аккаунт пользователя</Text>
          </Pressable>
        </View>
      </View>

      <View className="fixed bottom-0">
        <Text className="text-center text-[12px] text-shadowText">
          Продолжая работу с сервисом, вы принимаете наши Условия использования
          и подтверждаете, что вами прочитана наше Политика конфиденциальности,
          где описано, как мы собираем, используем и передаём ваши данные, и
          наша Политика использования файлов cookie
        </Text>
      </View>
    </View>
  )
}
