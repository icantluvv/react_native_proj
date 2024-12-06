import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const InputBox = ({ title, placeholder }: InputBoxProps) => {
  return (
    <View>
      <Text className="font-bold text-[12px]">{title}</Text>
      <TextInput
        placeholder={`${placeholder}`}
        className={`p-4 placeholder:text-shadowText mt-[5px] rounded-[12px] border border-hoverButton `}
      ></TextInput>
    </View>
  )
}

export default InputBox
