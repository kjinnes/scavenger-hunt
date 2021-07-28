import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getHunt } from '../../redux/actions/hunt';
import { IHunt } from '../../interfaces/IHunt';
import { ITask } from '../../interfaces/ITask';
import Container from '../../components/layout/Container';

const Start = () => {
  const dispatch = useAppDispatch()
  const [current, setCurrent] = useState<ITask|undefined>(undefined);
  const hunt = useAppSelector((state) => state.hunt);

  useEffect(() => {
    if (!hunt) dispatch(getHunt());
  }, []);

  useEffect(() => {
    if (hunt) setCurrent(hunt.start);
  }, [hunt])
  
  console.log(current);
  return (
    <Container>
      {current ? (
        <>
        <Text style={styles.text}>{current.riddle.riddle}</Text>
        <Button style={styles.button} mode="contained">Submit Proof</Button>
        <Button style={styles.button} mode="contained">Scan Code</Button>
        <Button style={styles.button} mode="outlined">Give up</Button>
        </>
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
  }
})

export default Start
