import React from 'react'
import { View, Text, Image } from 'react-native'

const Progress = ({ selectedOrganization }: ProgreeSelectedOrgProps) => {
  const sale = {
    min_value: 5,
    max_value: 20,
    current_value: 10
  }

  const progressPercentage =
    ((sale.current_value - sale.min_value) /
      (sale.max_value - sale.min_value)) *
    100
  const remainingPercentage = 100 - progressPercentage

  return (
    <View className="w-full relative flex items-center justify-center mt-[2vh] px-[2vw]">
      <Text className="font-semibold">Прогресс скидки</Text>

      <View className="w-full mt-[1vh] relative flex flex-row items-center justify-center">
        <View className="flex absolute flex-row z-[1000] w-full px-[1%] justify-between">
          <Text className="font-semibold  rounded-[17px] w-[38px] h-[38px] text-[14px] text-center py-[2.5%]">
            {sale.min_value}
            <Text className="text-[8px]">%</Text>
          </Text>

          <Text className="font-semibold  rounded-[17px] w-[38px] h-[38px] text-[14px] text-center py-[2.5%]">
            {/* {selectedOrganization?.max_discount} */}
            {sale.max_value}
            <Text className="text-[8px]">%</Text>
          </Text>
        </View>

        <View className="relative w-full h-[47px] flex-row">
          <View
            style={{
              width: `${progressPercentage}%`
            }}
            className="bg-goalsGreen h-full"
          ></View>
          <View
            style={{
              width: `${remainingPercentage}%`
            }}
            className="bg-[#d6d6d6] w-1/2 h-full"
          ></View>

          <Image
            className="w-full absolute h-[47px]"
            source={require('@/assets/images/score_bg.png')}
          ></Image>
        </View>
      </View>
    </View>
  )
}

export default Progress

interface ProgreeSelectedOrgProps {
  selectedOrganization: {
    mind_discount?: number
    max_discount?: number
  }
}
