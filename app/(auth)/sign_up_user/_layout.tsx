import { router, Stack } from 'expo-router'
import React from 'react'
import { Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function SignUpuser() {
  return (
    <Stack>
      <Stack.Screen
        name="sign_up"
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="loadData"
        options={{
          headerShown: true,
          title: 'Создание пользователя',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#ffffff' },
          headerLeft: ({}) => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={require('../../../assets/images/BackButton.png')}
                className="w-[20px] h-[20px]"
              />
            </TouchableOpacity>
          )
        }}
      ></Stack.Screen>
    </Stack>
  )
}
