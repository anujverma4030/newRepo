import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>hello changing the text</Text>
    <View>
     
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default App;
