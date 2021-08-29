import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, ProgressBar } from 'react-native-paper';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '../../redux/hooks';
import { getHunt } from '../../redux/actions/hunt';
import { setStart } from '../../redux/actions/current';
import { IHunt } from '../../interfaces/IHunt';
import { ITask } from '../../interfaces/ITask';
import Container from '../../components/layout/Container';
import ClueModal from '../../components/layout/ClueModal';
import Task from '../../components/Task';

const Start = () => {
  const dispatch = useAppDispatch()
  const thunkDispatch = useAppThunkDispatch();
  const hunt: IHunt = useAppSelector((state) => state.hunt);
  const current: ITask = useAppSelector((state) => state.current);
  const progress = 2;

  useEffect(() => {
    if (!hunt) thunkDispatch(getHunt());
  }, []);

  useEffect(() => {
    if (hunt) dispatch(setStart());
  }, [hunt])

  const scanCodeHandler = () => {
    console.log('scan code')
  }

  const giveUpHandler = () => {
    console.log('give up')
  }

  return (
    <Container>
      
      {current && hunt ? (
        <View style={styles.container}>
        <View>
        <Text style={styles.text}>{current.riddle.riddle}</Text>
        <Button
          style={styles.button}
          mode="contained"
          onPress={scanCodeHandler}
        >
          Scan Code
        </Button>
        </View>
        <ClueModal />
        <Task />
        <ProgressBar progress={progress ? (progress / hunt.questions) : progress }/>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
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

export default Start
