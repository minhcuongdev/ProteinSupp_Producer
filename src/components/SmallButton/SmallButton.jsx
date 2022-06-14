import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './SmallButtonStyles'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'

const SmallButton = ({label, onTap, isDisable}) => {
  return (
    <Pressable onPress={() => !isDisable ? onTap() : {}} >
      <View style={[styles.container,{opacity: isDisable ? 0.5 : 1}]}>
        <MyText title={label} variant="h2" style={styles.text} color={Color.WHITE} />
      </View>
    </Pressable>
  )
}

export default SmallButton