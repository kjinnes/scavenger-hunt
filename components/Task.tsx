import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';

const Task = () => {
  const submitProofHandler = () => {
    console.log('submit proof')
  }
  return (
      <Button
          style={styles.button}
          mode="contained"
          onPress={submitProofHandler}
        >
          Submit Proof
        </Button>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginVertical: 20,
  },
  button: {
    width: '50%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'space-between',
    height: '100%',
  }
})


export default Task
