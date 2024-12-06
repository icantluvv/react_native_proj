import React, { useState } from 'react'
import { Pressable, View, Text } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import OrgResponseContainer from '@/components/organizationPage/OrgResponsesContainer'
import GoalsContainer from '@/components/organizationPage/GoalsContainer'
import { useRouter } from 'expo-router'

export default function SwitcherAndResponse() {
  const [activeTab, setActiveTab] = useState('Response')
  const router = useRouter()

  const handleTabClick = (tab: string) => {
    router.push('/(app)/(organization)/goals')
  }

  const handleSwipeLeft = () => {
    if (activeTab === 'Response') setActiveTab('Goals')
  }

  const handleSwipeRight = () => {
    if (activeTab === 'Goals') setActiveTab('Response')
  }

  return (
    <>
      <View className="w-[45%] flex-row mt-[10%] justify-between">
        <Pressable
          className={`${activeTab != 'Response' && ' border-b-0'} pb-2 border-b`}
          onPress={() => handleTabClick('Response')}
        >
          <Text className={`${activeTab != 'Response' && 'text-shadowText'} `}>
            Отзывы
          </Text>
        </Pressable>

        <Pressable
          className={`${activeTab != 'Goals' && ' border-b-0'} pb-2 border-b`}
          onPress={() => handleTabClick('Goals')}
        >
          <Text className={`${activeTab != 'Goals' && 'text-shadowText'} `}>
            Голсы
          </Text>
        </Pressable>
      </View>

      <View className="w-full px-[5%] h-full bg-lightGray ">
        <GestureRecognizer
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        >
          {activeTab === 'Response' ? (
            <OrgResponseContainer />
          ) : (
            <GoalsContainer />
          )}
        </GestureRecognizer>
      </View>
    </>
  )
}
