import { View, Image, Text } from 'react-native'

interface InfoUserProps {
  profileData: ProfileDataProps
}

export default function InfoUser({ profileData }: InfoUserProps) {
  return (
    <View className="w-full items-center mt-[4vh]">
      <Image
        className="w-[100px] h-[100px] rounded-[50px]"
        source={{ uri: `data:image/png;base64, ${profileData.photo}` }}
      ></Image>
      <Text className="text-[32px] font-medium mt-4">
        {profileData.username}
      </Text>
      <Text className="text-[16px] mt-2">{profileData.description}</Text>
    </View>
  )
}
