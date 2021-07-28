import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Create')}
      >
        <Image source={require('../assets/create.gif')} style={styles.image} />
        <Text style={styles.text}>Create a Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Play')}
      >
        <Image
          source={require('../assets/search.gif')}
          style={styles.image}
        />
        <Text style={styles.text}>Play a Game</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    textAlign: 'center',
  }
});

export default Home;
