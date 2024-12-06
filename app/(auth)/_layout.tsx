import { Tabs } from 'expo-router'

export default function AuthTabLayout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarStyle: { display: 'none' } }}>
        <Tabs.Screen
          name="sign_up_user"
          options={{ headerShown: false }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="sign_up_business"
          options={{ headerShown: false }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="log_in"
          options={{ headerShown: false }}
        ></Tabs.Screen>
      </Tabs>
    </>
  )
}
