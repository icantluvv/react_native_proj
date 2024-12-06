import '../global.css'
import { SessionProvider } from '@/components/ctx'
import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import React from 'react'

export default function Root() {
  return (
    <GestureHandlerRootView>
      <SessionProvider>
        
        <Slot></Slot>
      </SessionProvider>
    </GestureHandlerRootView>
  )
}
