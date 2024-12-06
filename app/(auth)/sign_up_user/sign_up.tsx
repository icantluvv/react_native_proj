import { router } from 'expo-router'
import {
  Pressable,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView
} from 'react-native'

import { TextInput } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import { saveUserData } from '@/app/(auth)/sign_up_user/userData'
import AuthButton from '@/ui/authButton/AuthButton'

export default function SignUp() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [errorEmail, setErrorEmail] = useState<boolean>(false)
  const [errorPassword, setErrorPassword] = useState<boolean>(false)
  const [errorRepeat, setErrorRepeat] = useState<boolean>(false)

  async function ValidateInputs(
    email: string,
    password: string,
    repeatPassword: string
  ) {
    const validate = await CheckRegisterData(
      email,
      password,
      repeatPassword,
      setErrorEmail,
      setErrorPassword,
      setErrorRepeat
    )

    if (validate) {
      await saveUserData({ email, password })
      router.push('/sign_up_user/loadData')
    }
  }

  return (
    <SafeAreaView className="bg-white items-center ">
      <View className="px-[5%]  h-full pt-[10vh] relative ">
        <StatusBar barStyle="dark-content"></StatusBar>
        <View className={''}>
          <Text className="text-[28px] w-[75%] font-bold">
            Добро пожаловать в Goals
          </Text>

          <View className="gap-y-4 mt-[10%]">
            <TextInput
              value={email}
              onChangeText={(event) => setEmail(event.toLowerCase())}
              placeholder="Адрес электронной почты"
              className={`p-4 placeholder:text-shadowText rounded-[12px] border ${errorEmail ? 'border-red-500' : 'border-hoverButton '}`}
            ></TextInput>
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(event) => setPassword(event)}
              placeholder="Пароль"
              className={`p-4 placeholder:text-shadowText rounded-[12px] border ${errorPassword ? 'border-red-500' : 'border-hoverButton '}`}
            ></TextInput>
            <TextInput
              secureTextEntry={true}
              value={repeatPassword}
              onChangeText={(event) => setRepeatPassword(event)}
              placeholder=" Повторение пароля"
              className={`p-4 placeholder:text-shadowText rounded-[12px] border ${errorRepeat ? 'border-red-500' : 'border-hoverButton '}`}
            ></TextInput>
          </View>

          <Pressable
            onPress={() => ValidateInputs(email, password, repeatPassword)}
            className="bg-[#171717] active:bg-activeBlackButton h-[48px] mt-[7%] rounded-[12px] justify-center items-center"
          >
            <Text className="text-white text-[14px] font-semibold">
              Следующий шаг
            </Text>
          </Pressable>

          <View className="flex-row justify-center mt-[5%]">
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

          {/*  switch buttons */}
          <View className="flex-row justify-center mt-[5%]">
            <Text className="text-shadowText">Свой бизнес? </Text>
            <Pressable
              className="active:opacity-50"
              onPress={() =>
                router.push('/(auth)/sign_up_business/sign_up_business_acc')
              }
            >
              <Text className="font-medium">Создать аккаунт для бизнеса</Text>
            </Pressable>
          </View>

          {/*  design */}
          <View className="justify-center items-center gap-x-2 mt-[10%] flex-row">
            <View className="h-[1px] w-1/3 bg-shadowText"></View>
            <Text className="text-shadowText">Продолжить через</Text>
            <View className="h-[1px] w-1/3 bg-shadowText"></View>
          </View>

          {/*  google vk*/}
          <View className="mt-[7%] flex-row gap-x-4 justify-center">
            <AuthButton type={'vk'}></AuthButton>
            <AuthButton type={'google'}></AuthButton>
          </View>
        </View>
      </View>

      <View className="absolute px-[5%] items-center bottom-[4.5vh]">
        <Text className="text-center text-[12px] text-shadowText">
          Продолжая работу с сервисом, вы принимаете наши Условия использования
          и подтверждаете, что вами прочитана наше Политика конфиденциальности,
          где описано, как мы собираем, используем и передаём ваши данные, и
          наша Политика использования файлов cookie
        </Text>
      </View>
    </SafeAreaView>
  )
}

async function CheckRegisterData(
  email: string,
  password: string,
  repeatPassword: string,
  setErrorUsername: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorPassword: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorRepeat: React.Dispatch<React.SetStateAction<boolean>>
) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  setErrorUsername(false)
  setErrorPassword(false)
  setErrorRepeat(false)
  if (email == '' || !emailPattern.test(email)) {
    setErrorUsername(true)
    return false
  }

  if (password == '' || password.length < 9) {
    setErrorPassword(true)
    setErrorRepeat(true)
    return false
  }

  if (repeatPassword == '' || password !== repeatPassword) {
    setErrorRepeat(true)
    return false
  }

  return true
}
