import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';


const ClueModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const current = useAppSelector((state) => state.current);

  return (
    <View style={{flex: 1}}>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={showModal}
      >
        Give up
      </Button>
    <Modal
      style={styles.modal}
      isVisible={visible}
      onBackButtonPress={hideModal}
      backdropOpacity={0.8}
    >
      <View style={styles.modalView}>
        <View>
          <Image style={styles.image} source={current.riddle.image} />
          <Text style={styles.text}>You will need to find a {current.riddle.label} to discover your next task!</Text>
        </View>
        <Button mode="outlined" onPress={hideModal}>
          Hide Modal
        </Button>
      </View>
    </Modal>
  </View>
  );
};


const styles = StyleSheet.create({
  button: {
    width: '50%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  modal: {
    height: '50%',
  },
  modalView: {
    // flex: 1,
    justifyContent: 'space-between',
    height: '50%',
    backgroundColor: '#f4f4f4',
    padding: 20,
    borderRadius: 15,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
  }
})

export default ClueModal;
