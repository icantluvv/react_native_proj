import React from 'react'
import { View } from 'react-native'
import Goal from '@/components/organizationPage/Goal'

const Goals = () => {
  return (
    <View className="w-full h-screen items-center px-[5%]">
      <View className="w-[90vw] h-[85vh] items-center justify-center">
        <Goal></Goal>
      </View>
    </View>
  )
}

export default Goals
