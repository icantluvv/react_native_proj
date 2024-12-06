import Progress from '@/components/organizationPage/Progress'
import SwitcherAndResponse from '@/components/organizationPage/SwitchResponsesGoals'
import useOrganizationStore from '@/store/organizationWidgetStore'
import React, { useState } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
  SafeAreaView
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Organization = () => {
  const { selectedOrganization } = useOrganizationStore()

  const [isExpanded, setIsExpanded] = useState(false)
  const toggleDescription = () => setIsExpanded(!isExpanded)

  const getShortDescription = (text: string) => {
    const maxLength = 60
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'
    }
    return text
  }

  return (
    <>
      <SafeAreaView className="h-screen relative">
        <ScrollView>
          <View className="w-fullbg-white items-center gap-y-5">
            <View className="items-center relative py-4 px-4 gap-y-3">
              <Image
                source={{ uri: selectedOrganization?.photo }}
                className="bg-black w-[100px] h-[100px] rounded-[50px]"
              ></Image>
              <View className="items-center">
                <Text className="text-[28px] font-semibold">
                  {selectedOrganization?.name}
                </Text>
                <Text className="text-shadowText">кофейня</Text>
              </View>

              <TouchableOpacity
                onPress={toggleDescription}
                className="items-end"
              >
                <Text className="max-w-[85%] text-center">
                  {isExpanded
                    ? selectedOrganization?.description
                    : getShortDescription(
                        selectedOrganization?.description || ''
                      )}
                  <Text className="text-shadowText text-[12px] ml-2">
                    {isExpanded ? ' скрыть' : ' подробнее'}
                  </Text>
                </Text>
              </TouchableOpacity>

              <View className="flex-row items-center gap-x-2">
                <Image source={require('@/assets/images/Place.png')}></Image>
                <Text>г. Ростов-на-Дону, ул. Садовая, д. 259</Text>
              </View>

              <Progress selectedOrganization={selectedOrganization}></Progress>
            </View>
            <SwitcherAndResponse></SwitcherAndResponse>

            
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* <View className="absolute bottom-[7%] px-4 w-full">
        <Pressable className="rounded-[12px] h-[48px] w-full bg-goalsGreen active:bg-activeGoalsGreen items-center justify-center">
          <Text className="font-medium">Создать отзыв</Text>
        </Pressable>
      </View> */}
    </>
  )
}

export default Organization
