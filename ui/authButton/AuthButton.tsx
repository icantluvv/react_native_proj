import React from 'react'
import { Pressable, Image } from 'react-native'

export default function AuthButton({ type }: AuthButtonProps) {
  switch (type) {
    case 'vk':
      return (
        <Pressable>
          <Image
            className="w-[50px] h-[50px] rounded-[25px] bg-blue-500"
            source={require('@/assets/images/VK.png')}
          ></Image>
        </Pressable>
      )
    case 'google':
      return (
        <Pressable>
          <Image
            className="w-[50px] h-[50px] rounded-[25px] bg-white"
            source={require('@/assets/images/Google.png')}
          ></Image>
        </Pressable>
      )
  }
}

interface AuthButtonProps {
  type: string
}
