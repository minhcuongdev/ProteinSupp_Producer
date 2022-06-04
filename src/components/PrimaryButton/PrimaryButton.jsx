import { View, Pressable, TouchableHighlight } from 'react-native'
import React from 'react'

import Color from 'src/constants/Color'
import styles from './PrimaryButtonStyles'
import MyText from '../MyText/MyText'

const PrimaryButton = ({title,handleOnPress,style, height = 55, color = Color.WHITE, marginRight = 0, marginLeft =0}) => {
  return (
    <TouchableHighlight onPress={() => handleOnPress()} activeOpacity={0.8} underlayColor={Color.OVERPLAY_COLOR} style={[styles.container, {height: height, marginRight: marginRight, marginLeft: marginLeft}]}>
      <View style={[styles.container, style, {height: height}]}>
        <MyText title={title} variant="h2" color={color} />
      </View>
    </TouchableHighlight>
  )
}


export default PrimaryButton