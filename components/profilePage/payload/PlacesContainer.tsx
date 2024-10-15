import React from 'react'
import { View } from 'react-native'
import Place from './Place'

const PlacesContainer = () => {
  return (
    <View className="w-full py-6 gap-y-6">
      <Place></Place>
      <Place></Place>
      <Place></Place>
    </View>
  )
}

export default PlacesContainer
