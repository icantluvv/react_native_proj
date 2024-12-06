import useOrganizationStore from '@/store/organizationWidgetStore'
import React from 'react'
import { View, Image, Pressable, Text } from 'react-native'

const Goal = () => {
  const { selectedOrganization } = useOrganizationStore()

  return (
    <View className="w-full items-center relative">
      <View className="absolute items-center">
        <Image
          className="w-[80px] h-[80px] rounded-[40px] absolute top-[-10%] border-white z-[1000] border-2"
          source={{ uri: selectedOrganization?.photo }}
        ></Image>

        <Image
          source={require('@/assets/images/apple_goal.png')}
          className="w-[80vw] h-[25vh] mt-[7%]"
        ></Image>
      </View>

      <Text className="w-[75vw] text-[20px] font-bold text-white mt-[75%] absolute ">
        Яблоко на вилку!
      </Text>

      <Text className="w-[75vw] text-[14px] text-white mt-[85%] absolute ">
        Запускаем челлендж! Приходите с друзьями в наше кафе и попробуйте
        получить максимальную скидку, подбрасывая яблоко на столовый прибор так,
        чтобы оно на нем и осталось...
      </Text>
      <Image
        className="w-full h-[75vh] z-[-1]"
        source={require('@/assets/images/Goal_red.png')}
      ></Image>
      <Pressable className="bg-white w-[80vw] active:bg-hoverButton items-center justify-center h-[48px] bottom-[7%] rounded-[12px] absolute ">
        <Text className="font-semibold">Подробнее</Text>
      </Pressable>
    </View>
  )
}

export default Goal
