import NavigationBar from '@/components/NavigationBar'
import { router, Stack, Tabs } from 'expo-router'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MainTabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="accountEdit"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffffff' },
            headerShadowVisible: false,
            title: 'Аккаунт',
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => router.back()}>
                <Image
                  source={require('../../../assets/images/BackButton.png')}
                  className="w-[17px] h-[17px]"
                />
              </TouchableOpacity>
            )
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="confidences"
          options={{
            title: 'Конфиденциальность',
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#ffffff' },
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => router.back()}>
                <Image
                  source={require('../../../assets/images/BackButton.png')}
                  className="w-[17px] h-[17px]"
                />
              </TouchableOpacity>
            )
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="notifications"
          options={{
            title: 'Уведомления',
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#ffffff' },
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => router.back()}>
                <Image
                  source={require('../../../assets/images/BackButton.png')}
                  className="w-[17px] h-[17px]"
                />
              </TouchableOpacity>
            )
          }}
        ></Stack.Screen>
      </Stack>
    </>
  )
}
