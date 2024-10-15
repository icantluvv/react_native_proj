import '../global.css'
import { SessionProvider } from '../services/ctx'
import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Root() {
  return (
    <GestureHandlerRootView>
      <SessionProvider>
        <Slot></Slot>
      </SessionProvider>
    </GestureHandlerRootView>
  )
}
