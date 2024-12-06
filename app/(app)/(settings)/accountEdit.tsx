import { useSession } from '@/components/ctx'
import React from 'react'
import { View, Text, Pressable, SafeAreaView, ScrollView } from 'react-native'

const AccountEdit = () => {
  const { signOut } = useSession()
  return (
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mx-[3%] mt-5 py-2 bg-white drop-shadow-lg rounded-[5px]">
          <Pressable className="active:bg-hoverButton p-4">
            <Text className="text-[16px]">Сведения о пользователя</Text>
          </Pressable>
          <Pressable className="active:bg-hoverButton p-4 ">
            <Text className="text-[16px]">Пароль</Text>
          </Pressable>
          <Pressable
            className="active:bg-hoverButton p-4"
            onPress={() => signOut()}
          >
            <Text className="text-[16px]">Выйти из аккаунта</Text>
          </Pressable>
          <Pressable className="active:bg-hoverButton p-4 ">
            <Text className="text-[16px]">
              Деактивировать или
              <Text className="text-red-500"> удалить аккаунт</Text>
            </Text>
            <Text className="text-[14px] mt-3 text-shadowText">
              Это действие является необратимым
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountEdit
