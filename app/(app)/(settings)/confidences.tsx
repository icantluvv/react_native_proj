import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Confidences = () => {
  return (
    <View style={styles.container}>
      <Text>Редактирование conf</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Confidences;
