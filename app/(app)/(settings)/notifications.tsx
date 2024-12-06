import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

const Notifications = () => {
  return (
    <SafeAreaView className=" flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text>Редактирование notify</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Notifications
