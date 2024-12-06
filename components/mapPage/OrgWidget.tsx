import React, { useRef, useEffect } from 'react'
import { View, Text, Image, Pressable, Animated } from 'react-native'
import { useRouter } from 'expo-router'

const OrgWidget = ({ organization }: OrganizationWidgetProps) => {
  const slideAnim = useRef(new Animated.Value(500)).current // Начальное положение (ниже экрана)

  const router = useRouter()

  useEffect(() => {
    // Запуск анимации при монтировании компонента
    Animated.timing(slideAnim, {
      toValue: 0, // Финальное положение (0px от нижнего края)
      duration: 150, // Длительность анимации в миллисекундах
      useNativeDriver: true // Используем нативные драйверы для повышения производительности
    }).start()
  }, [slideAnim])

  return (
    <Animated.View
      style={{
        transform: [{ translateY: slideAnim }] // Анимация движения по оси Y
      }}
      className="w-full py-10 px-[18px] rounded-t-[25px] absolute bottom-0 z-[9000] bg-white items-center"
    >
      <Image
        className="w-[20vw] h-[20vw] rounded-[10vw] bg-black border-white border-2 absolute top-[-10vw]"
        source={{ uri: organization?.photo }}
      />
      <View className="flex-1 gap-[1vh] mb-3">
        <Text className="text-[20px] font-semibold">{organization?.name}</Text>
        <Text className="text-shadowText">Культурное пространство</Text>
        <Text className="leading-[20px]" numberOfLines={3}>
          {organization?.description}
        </Text>
        <View className="flex-row flex-wrap gap-y-3">
          <View className="gap-2 flex-row items-center w-full">
            <Image source={require('@/assets/images/Place.png')} />
            <Text>г. Ростов-на-Дону, ул. Садовая, д. 259</Text>
          </View>
          <View className="gap-2 w-1/2 flex-row items-center">
            <Image source={require('@/assets/images/Present.png')} />
            <Text className="font-semibold">
              Скидка до {organization?.max_discount}%
            </Text>
          </View>
          <View className="gap-2 w-1/2 flex-row items-center">
            <Image
              source={require('@/assets/images/Goals_counter_image.png')}
            />
            <Text className="font-semibold">
              {organization?.goals.length} голоса
            </Text>
          </View>
          <View className="gap-2 w-1/2 flex-row items-center">
            <Image source={require('@/assets/images/How_many_response.png')} />
            <Text className="font-semibold">
              {organization?.users.length} отзывов
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => router.push('/(app)/(organization)/organization')}
        className="w-full h-[48px] bg-goalsGreen rounded-[12px] justify-center items-center active:bg-activeGoalsGreen transition-all duration-50"
      >
        <Text className="font-medium">Подробнее</Text>
      </Pressable>
    </Animated.View>
  )
}

export default OrgWidget
