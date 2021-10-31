/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity,StyleSheet,Pressable} from 'react-native';
import diceone from './assets/dice1.png';
import dicetwo from './assets/dice2.png';
import dicethree from './assets/dice3.png';
import dicefour from './assets/dice4.png';
import dicefive from './assets/dice5.png';
import diceSix from './assets/dice6.png';

const App = () => {
  const [uri1,setUri1] = useState(diceone);
  const [uri2,setUri2] = useState(dicetwo);

  const rollDice = () => {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    switch(random1){
      case 1:
        setUri1(diceone);
        break;
      case 2:
        setUri1(dicetwo);
        break;
      case 3:
        setUri1(dicethree);
        break;
      case 4:
        setUri1(dicefour);
        break;
      case 5:
        setUri1(dicefive);
        break;
      case 6:
        setUri1(diceSix);
        break;
    }
    switch(random2){
      case 1:
        setUri2(diceone);
        break;
      case 2:
        setUri2(dicetwo);
        break;
      case 3:
        setUri2(dicethree);
        break;
      case 4:
        setUri2(dicefour);
        break;
      case 5:
        setUri2(dicefive);
        break;
      case 6:
        setUri2(diceSix);
        break;
    }
  }

  return (
    <>
      <View style={styles.container}>
        
        <Pressable onPress={rollDice}>
          <Image source={uri1} style={{width: 200, height: 200}} />
          <Image source={uri2} style={{width: 200, height: 200}} />
        </Pressable>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#322C4D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    marginTop: 20,
    fontSize: 30,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#322C4D',
    borderRadius: 20,
    color: '#fff',
  },
});