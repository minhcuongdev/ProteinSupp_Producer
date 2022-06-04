import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './CounterStyles'
import { AntDesign } from '@expo/vector-icons';
import Color from 'src/constants/Color';
import { useDispatch } from 'react-redux';
import { setSnackBar } from 'src/redux/slices/snackBarSlice';

const Counter = ({counter, actionIncrease, actionDecrease}) => {
  const dispatch = useDispatch()

  const handleIncrementCounter = () => {
    if(counter === 99) return dispatch(setSnackBar({open: true, title: "Số  lượng vượt mức cho phép"}))
    actionIncrease()
  }

  const handleDecrementCounter = () => {
    if(counter === 1) return dispatch(setSnackBar({open: true, title: "Số  lượng nhỏ nhất cho phép"}))
    actionDecrease()
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleDecrementCounter()} style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Color.GRAY_03
            : Color.GRAY_01
        },
        styles.symbol
      ]}>
        <AntDesign name="minus" size={16} color="black" />
      </Pressable>
      <Text style={styles.number}>{counter}</Text>
      <Pressable onPress={() => handleIncrementCounter()} style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Color.GRAY_03
            : Color.GRAY_01
        },
        styles.symbol
      ]}>
        <AntDesign name="plus" size={16} color="black" />
      </Pressable>
    </View>
  )
}

export default Counter