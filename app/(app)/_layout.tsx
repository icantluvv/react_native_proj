import { Redirect, router, Stack, useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { useSession } from '../../services/ctx'

export default function AppLayout() {
  const { session, isLoading } = useSession()

  if (!session) {
    return <Redirect href="/sign_up" />
  }

  return (
    <Stack>
      <Stack.Screen
        name="(main)"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="(settings)/accountEdit"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#f2f2f2' },
          headerShadowVisible: false,
          title: 'Аккаунт',
          headerLeft: ({}) => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={require('../../assets/images/BackButton.png')}
                className="w-[17px] h-[17px]"
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="(settings)/confidences"
        options={{
          headerShown: true,
          title: 'Аккаунт',
          headerLeft: ({}) => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={require('../../assets/images/BackButton.png')}
                className="w-[17px] h-[17px]"
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="(settings)/notifications"
        options={{
          headerShown: true,
          title: 'Аккаунт',
          headerLeft: ({}) => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={require('../../assets/images/BackButton.png')}
                className="w-[17px] h-[17px]"
              />
            </TouchableOpacity>
          )
        }}
      />
    </Stack>
  )
}
