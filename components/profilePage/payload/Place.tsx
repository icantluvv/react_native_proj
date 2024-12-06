import React from 'react'
import { Pressable, Text, View } from 'react-native'
import PlacePhoto from './PlacePhoto'

const Place = () => {
  return (
    <View className="p-4 bg-white rounded-[12px] gap-y-3">
      <View className="flex flex-col w-full gap-y-3">
        <View className="w-full flex flex-row items-center justify-between gap-x-4">
          <View className="w-[40px] h-[40px] bg-black rounded-[20px]"></View>
          <View className="flex flex-grow">
            <View className="font-semibold flex-col flex">
              <Text className="text-[16px]">Заведение</Text>

              <Text className="text-[11px] text-[#C6C6C6]">
                Всего голсов: 10
              </Text>
            </View>
          </View>

          <View className="w-[40px] h-[40px] bg-goalsGreen rounded-[20px]"></View>
        </View>
        <Text className="text-[14px] font-normal">
          Ничего удивительного в отсутствии у трети россиян интереса к чтению
          нет...
        </Text>
      </View>
      <View className="flex w-full gap-x-2 justify-between">
        {/* <PlacePhoto></PlacePhoto>
        <PlacePhoto></PlacePhoto>
        <PlacePhoto></PlacePhoto> */}
      </View>
      <Pressable className="w-full border-2 border-[#d9d9d9] h-[48px] items-center justify-center rounded-[10px] ">
        <Text className="text-[14px]">Подробнее</Text>
      </Pressable>
    </View>
  )
}

export default Place
