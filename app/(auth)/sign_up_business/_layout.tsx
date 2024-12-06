import { Stack } from 'expo-router'
import React from 'react'

export default function SignUpBusinessLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign_up_business_acc"
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="loadData_business"
        options={{
          headerShown: false
        }}
      ></Stack.Screen>
    </Stack>
  )
}
