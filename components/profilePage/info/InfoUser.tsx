import { View, Image, Text } from 'react-native'

export default function InfoUser() {
  return (
    <View className="w-full items-center">
      <Image
        className="w-[100px] h-[100px] bg-black rounded-[50%]"
        src={'logo'}
      ></Image>
      <Text className="text-[32px] font-medium mt-4">icantluvv</Text>
      <Text className="text-[16px] mt-2">description</Text>
    </View>
  )
}
