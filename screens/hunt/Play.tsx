import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getHunt } from '../../redux/actions/hunt';
import Container from '../../components/layout/Container';
import { IHunt } from '../../interfaces/IHunt';
import { ITask } from '../../interfaces/ITask';


const Play = ({ navigation }) => {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');
  const dispatch = useAppDispatch();

  const buttonHandler = async () => {
    try {
      await dispatch(getHunt());
      navigation.navigate('Start');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Container>
    <View style={styles.container}>
      {error.length > 0 && <Text>{error}</Text>}
      <Image style={styles.image} source={require('../../assets/phone-find.gif')} />
      <Text style={styles.text}>Play a Scavenger Hunt!</Text>
      <TextInput
        style={{ width: '100%' }}
        label="Enter your code here"
        value={text}
        onChangeText={(txt) => setText(txt)}
        keyboardType="numeric"
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={buttonHandler}
      >
        Go!
      </Button>
    </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
  },
  button: {
    width: '20%',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
  }

});

export default Play;
