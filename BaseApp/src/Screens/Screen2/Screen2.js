import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Color } from '../../Constant/Constants';
const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the  Screen 2!</Text>
      <Image
        style={styles.image}
        source={require('../../Assets/Image/test.png')} // Replace with your image URL
      />
      <Button
        title='go to next screen'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.background,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    backgroundColor:Color.lightBlue
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default Screen2;
