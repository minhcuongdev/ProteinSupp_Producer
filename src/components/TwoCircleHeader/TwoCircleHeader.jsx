import { View, Keyboard } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './TwoCircleHeaderStyles'

const TwoCircleHeader = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.headerRedCircle}></View>
      <View style={[styles.headerYellowCircle,{top: keyboardStatus ? -72: -30}]}></View>
    </View>
  )
}

export default TwoCircleHeader