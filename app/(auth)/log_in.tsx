import LoginAuth from '@/utils/CheckLoginData'
import LoginApi from '@/api/login/Login'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Pressable, Text, View, StatusBar } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useSession } from '@/components/ctx'
import AuthButton from '@/ui/authButton/AuthButton'

export default function LogIn() {
  const [password, setPassword] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [data, setData] = useState<any>(null)
  const [errorLogin, setErrorLogin] = useState<boolean>(false)
  const [errorPassword, setErrorPassword] = useState<boolean>(false)

  const { signIn } = useSession()
  const router = useRouter()

  async function pushLog() {
    const isUserDataValid = LoginAuth(
      password,
      login,
      setErrorLogin,
      setErrorPassword
    )

    if (isUserDataValid) {
      const response = await LoginApi(login, password)
      if (!response) {
        setErrorLogin(true)
        setErrorPassword(true)
        return
      }
      await signIn(response)
      router.push('/')
    } else {
      setErrorLogin(true)
      setErrorPassword(true)
    }
  }

  useEffect(() => {
    if (data) {
      signIn(data)
      router.push('/')
    }
  }, [data])

  return (
    <View className="px-[5%] pt-[17vh] bg-white justify-between flex-col h-screen pb-[4.5vh]">
      <StatusBar barStyle="dark-content"></StatusBar>
      <View>
        <Text className="text-[32px] w-[68%] font-bold">Войти</Text>

        <View className="gap-y-4 mt-[8%]">
          <TextInput
            value={login}
            onChangeText={(event) => setLogin(event.toLowerCase())}
            placeholder="Адрес электронной почты"
            className={`p-4 border rounded-[12px] border-hoverButton placeholder:text-shadowText ${
              errorLogin ? 'border-red-500' : ''
            }`}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            keyboardType="ascii-capable"
            value={password}
            secureTextEntry={true}
            onChangeText={(event) => setPassword(event)}
            placeholder="Пароль"
            className={`p-4 border rounded-[12px] border-hoverButton placeholder:text-shadowText ${
              errorPassword ? 'border-red-500' : ''
            }`}
          />
        </View>

        <Pressable
          onPress={pushLog}
          className="bg-[#171717] transition-colors duration-100 active:bg-activeBlackButton h-[48px] mt-[7%] rounded-[12px] justify-center items-center"
        >
          <Text className="text-white text-[14px] font-semibold">Войти</Text>
        </Pressable>
        <View className="flex-row justify-center mt-[7%]">
          <Text className="text-shadowText">Нет аккаунта? </Text>
          <Pressable
            className="active:opacity-50"
            onPress={() => router.push('/(auth)/sign_up_user/sign_up')}
          >
            <Text className="font-medium">Зарегистрироваться</Text>
          </Pressable>
        </View>
        <View className="justify-center items-center gap-x-2 mt-[10%] flex-row">
          <View className="h-[1px] w-1/3 bg-shadowText" />
          <Text className="text-shadowText">Продолжить через</Text>
          <View className="h-[1px] w-1/3 bg-shadowText" />
        </View>
        <View className="mt-[7%] flex-row gap-x-4 justify-center">
          <AuthButton type={'vk'}></AuthButton>
          <AuthButton type={'google'}></AuthButton>
        </View>
      </View>

      <View>
        <Text className="text-center text-[12px] text-shadowText">
          Продолжая работу с сервисом, вы принимаете наши Условия использования
          и подтверждаете, что вами прочитана наша Политика конфиденциальности,
          где описано, как мы собираем, используем и передаём ваши данные, и
          наша Политика использования файлов cookie.
        </Text>
      </View>
    </View>
  )
}
