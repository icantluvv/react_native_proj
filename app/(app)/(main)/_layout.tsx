import OrgWidget from '@/components/mapPage/OrgWidget'
import NavigationBar from '@/components/NavigationBar'
import { Tabs } from 'expo-router'
import { StatusBar, Animated, Pressable, PanResponder } from 'react-native'
import useOrganizationStore from '@/store/organizationWidgetStore'
import { useRef, useEffect } from 'react'

export default function MainTabLayout() {
  const { isWidgetVisible, selectedOrganization, hideWidget } =
    useOrganizationStore()

  const slideAnim = useRef(new Animated.Value(500)).current
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (isWidgetVisible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        })
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 500,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        })
      ]).start()
    }
  }, [isWidgetVisible])

  // Панель для жестов
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          slideAnim.setValue(gestureState.dy) // Обновляем позицию в зависимости от жеста
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // Скрыть виджет, если свайп вниз был достаточно сильным
        if (gestureState.dy > 100) {
          Animated.timing(slideAnim, {
            toValue: 500,
            duration: 200,
            useNativeDriver: true
          }).start(() => hideWidget())
        } else {
          // Вернуть виджет на место, если свайп был недостаточным
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
          }).start()
        }
      }
    })
  ).current

  return (
    <>
      <StatusBar barStyle="dark-content" />
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
        <Tabs.Screen name="profile"></Tabs.Screen>
        <Tabs.Screen
          name="settings"
          options={{ title: 'Настройки' }}
        ></Tabs.Screen>
      </Tabs>
      <NavigationBar />

      <Animated.View
        pointerEvents={isWidgetVisible ? 'auto' : 'none'}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          opacity: fadeAnim
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={hideWidget} />
      </Animated.View>

      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateY: slideAnim }],
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 9000
        }}
      >
        <OrgWidget organization={selectedOrganization} onClose={hideWidget} />
      </Animated.View>
    </>
  )
}
