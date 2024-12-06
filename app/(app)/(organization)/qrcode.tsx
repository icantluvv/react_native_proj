import useOrganizationStore from '@/store/organizationWidgetStore'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const QrCode = () => {
  const { selectedOrganization } = useOrganizationStore()

  return (
    <View className="items-center gap-y-[7vh]">
      <View className="items-center">
        <Text className="text-shadowText">кофейня</Text>
        <Text className="text-[28px] font-semibold">
          {selectedOrganization?.name}
        </Text>
        <Text className="mt-2">г. Ростов-на-Дону, ул. Садовая, д. 259</Text>
      </View>

      <View className="items-center">
        <Text className="absolute font-semibold z-[5000] text-[24px] mt-[13vh]">
          {selectedOrganization?.max_discount}%
        </Text>
        <View className="w-[50vw] h-[50vw] bg-white absolute z-[5000] mt-[30vh] rounded-[12px]">
          <Image
            className="w-full h-full rounded-[12px]"
            source={require('@/assets/images/someqr.png')}
          ></Image>
        </View>
        <Image
          source={require('@/assets/images/qr_ticket.png')}
          className="w-[67vw] h-[61vh]"
        ></Image>
      </View>
    </View>
  )
}

export default QrCode
