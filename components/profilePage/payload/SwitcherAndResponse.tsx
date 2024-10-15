import React, { useState } from 'react'
import { Pressable, View, Text } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import PlacesContainer from './PlacesContainer'
import RequestContainer from './RequestContainer'

export default function SwitcherAndResponse() {
  const [activeTab, setActiveTab] = useState('Place')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  const handleSwipeLeft = () => {
    if (activeTab === 'Place') setActiveTab('OS')
  }

  const handleSwipeRight = () => {
    if (activeTab === 'OS') setActiveTab('Place')
  }

  return (
    <>
      <View className="w-[45%] flex flex-row mt-[10%] justify-between">
        <Pressable
          className={`${activeTab != 'Place' && ' border-b-0'} pb-2 border-b`}
          onPress={() => handleTabClick('Place')}
        >
          <Text className={`${activeTab != 'Place' && 'text-shadowText'} `}>
            Мои места
          </Text>
        </Pressable>

        <Pressable
          className={`${activeTab != 'OS' && ' border-b-0'} pb-2 border-b`}
          onPress={() => handleTabClick('OS')}
        >
          <Text className={`${activeTab != 'OS' && 'text-shadowText'} `}>
            Отзывы
          </Text>
        </Pressable>
      </View>

      <View className="w-full px-[5%] h-full bg-lightGray ">
        <GestureRecognizer
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        >
          {activeTab === 'Place' ? <PlacesContainer /> : <RequestContainer />}
        </GestureRecognizer>
      </View>
    </>
  )
}
