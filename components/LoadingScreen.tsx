import React, { useEffect, useRef } from 'react'
import { Animated, View, StyleSheet } from 'react-native'

const LoadingScreen = () => {
  const rotateValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      })
    ).start()
  }, [rotateValue])

  const rotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  return (
    <View className="w-full h-full items-center justify-center">
      <Animated.Image
        source={require('../assets/images/loadingLogo.png')}
        style={[
          styles.loadingImage,
          { transform: [{ rotate: rotateAnimation }] }
        ]}
      />
    </View>
  )
}
export default LoadingScreen

const styles = StyleSheet.create({
  loadingImage: {
    width: 100,
    height: 100
  }
})
