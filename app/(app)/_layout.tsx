import { router, Stack } from 'expo-router'

import { useSession } from '../../components/ctx'
import React, { useEffect } from 'react'
import LoadingScreen from '../../components/LoadingScreen'

export default function AppLayout() {
  const { session, isLoading } = useSession()

  useEffect(() => {
    if (!isLoading) {
      if (!session) {
        router.push('/(auth)/sign_up_user/sign_up')
      }
    }
  }, [isLoading, session])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Stack>
      <Stack.Screen
        name="(main)"
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="(organization)"
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="(settings)"
        options={{
          headerShown: false
        }}
      ></Stack.Screen>
    </Stack>
  )
}
