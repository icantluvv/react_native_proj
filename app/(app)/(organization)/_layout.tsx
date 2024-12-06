import { router, Stack } from 'expo-router'
import { StatusBar, TouchableOpacity, Image } from 'react-native'

export default function OrganizationTabLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen
          name="organization"
          options={{
            contentStyle: { backgroundColor: '#ffffff' },
            headerShown: true,
            headerStyle: { backgroundColor: '#ffffff' },
            headerShadowVisible: false,
            title: '',
            headerLeft: ({}) => (
              <TouchableOpacity onPress={() => router.back()}>
                <Image
                  source={require('../../../assets/images/BackButton.png')}
                  className="w-[17px] h-[17px]"
                />
              </TouchableOpacity>
            ),
            headerRight: ({}) => (
              <TouchableOpacity onPress={() => router.push('/qrcode')}>
                <Image
                  source={require('../../../assets/images/qr_header.png')}
                  className="w-[30px] h-[30px]"
                />
              </TouchableOpacity>
            )
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="goals"
          options={{
            contentStyle: { backgroundColor: '#ffffff' },
            title: 'Голсы',
            headerShadowVisible: false,
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
          name="qrcode"
          options={{
            title: '',
            headerShadowVisible: false,
            contentStyle: { backgroundColor: '#ffffff' },
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
