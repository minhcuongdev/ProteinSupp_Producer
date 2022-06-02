import { View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import styles from './MyTextFieldStyles'
import Color from 'src/constants/Color'
import { useState } from 'react';

const MyTextField = ({value, onChangeText, placeholder , secureTextEntry = false, style, keyboardType="default" }) => {
  const [isViewText, SetIsViewText] = useState(secureTextEntry)

  const handleViewText = () => {
    SetIsViewText(!isViewText)
  }

  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.input} value={value} onChangeText={onChangeText} secureTextEntry={isViewText} selectionColor={Color.BLACK} placeholderTextColor={Color.GRAY_03} placeholder={placeholder} keyboardType={keyboardType} />
      {secureTextEntry &&
        (isViewText ?
          <Pressable onPress={() => handleViewText()} style={styles.icon}>
            <Entypo name="eye-with-line" size={24} color={Color.PRIMARY_RED_COLOR} /> 
          </Pressable> :
          <Pressable onPress={() => handleViewText()} style={styles.icon}>
            <Entypo name="eye" size={24} color={Color.PRIMARY_RED_COLOR} />
          </Pressable>
        )}
    </View>
  )
}

export default MyTextField