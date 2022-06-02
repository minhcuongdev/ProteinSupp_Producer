import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

import Color from 'src/constants/Color'
import styles from './PrimaryButtonStyles'
import MyText from '../MyText/MyText'

const PrimaryButton = ({title,handleOnPress,style, height = 55}) => {
  return (
    <TouchableHighlight onPress={() => handleOnPress()} activeOpacity={0.8} underlayColor={Color.OVERPLAY_COLOR} style={[styles.container,style, {height: height}]}>
      <View style={[styles.container, {height: height}]}>
        <MyText title={title} variant="h2" color={Color.WHITE} />
      </View>
    </TouchableHighlight>
  )
}

export default PrimaryButton