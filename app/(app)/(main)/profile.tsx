import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import SwitcherAndResponse from '@/components/profilePage/payload/SwitcherAndResponse'
import { ScrollView } from 'react-native-gesture-handler'
import InfoUser from '@/components/profilePage/info/InfoUser'
import axios from 'axios'

export default function Profile() {
  // useEffect(() => {
  //   const response = axios.get('')
  // })
  
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full flex-1 bg-white pt-[10vh] items-center gap-y-5">
          <InfoUser />
          <SwitcherAndResponse />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
