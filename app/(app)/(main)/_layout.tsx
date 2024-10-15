import NavigationBar from '@/components/NavigationBar'
import { Stack, Tabs } from 'expo-router'

export default function MainTabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { display: 'none' }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{ headerShown: false }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="profile"
          options={{ headerShown: false }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="settings"
          options={{ title: 'Настройки' }}
        ></Tabs.Screen>
      </Tabs>
      <NavigationBar />
    </>
  )
}
