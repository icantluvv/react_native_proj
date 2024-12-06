import { router } from 'expo-router'
import React from 'react'
import { View, Image, Pressable } from 'react-native'

const ArrowBackButton = () => {
  return (
    <View className="w-full">
      <Pressable className="w-[40px] h-[40px]" onPress={() => router.back()}>
        <Image
          className="w-[20px] h-[20px]"
          source={require('../../assets/images/BackButton.png')}
        ></Image>
      </Pressable>
    </View>
  )
}

export default ArrowBackButton
