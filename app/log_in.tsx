import { useNavigation, useRouter } from 'expo-router'
import { Pressable, Text, View, Image } from 'react-native'

import { TextInput } from 'react-native-gesture-handler'

export default function LogIn() {
  const router = useRouter()
  const navigation = useNavigation()
  return (
    <View className="px-[5%] pt-[17vh]">
      <Text className="text-[32px] w-[68%] font-bold">Войти</Text>

      <View className="gap-y-4 mt-[8%]">
        <TextInput
          placeholder=" Адрес электронной почты"
          className="p-4  border rounded-[12px] border-hoverButton"
        ></TextInput>
        <TextInput
          placeholder="Пароль"
          className="p-4 border rounded-[12px] border-hoverButton"
        ></TextInput>
      </View>

      <Pressable
        onPress={() => {
          router.push('/')
        }}
        className="bg-[#171717] active:bg-activeBlackButton h-[48px] mt-[7%] rounded-[12px] justify-center items-center"
      >
        <Text className="text-white text-[14px] font-semibold">Войти</Text>
      </Pressable>
      <View className="flex-row justify-center mt-[5%]">
        <Text className="text-shadowText">Нет аккаунта? </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('sign_up')
          }}
        >
          <Text className="font-medium">Зарегистрироваться</Text>
        </Pressable>
      </View>
      <View className="justify-center items-center gap-x-2 mt-[10%] flex-row">
        <View className="h-[1px] w-1/3 bg-shadowText"></View>
        <Text className="text-shadowText">Продолжить через</Text>
        <View className="h-[1px] w-1/3 bg-shadowText"></View>
      </View>
      <View className="mt-[7%] flex-row gap-x-4 justify-center">
        <Image className="w-[50px] h-[50px] rounded-[50%] bg-blue-500"></Image>
        <Image className="w-[50px] h-[50px] rounded-[50%] bg-red-500"></Image>
      </View>

      <View className="mt-[61.5%]">
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
