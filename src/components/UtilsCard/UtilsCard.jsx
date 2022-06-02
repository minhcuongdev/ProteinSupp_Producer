import { View, Pressable } from 'react-native'
import React from 'react'

import styles from './UtilsCardStyles'
import Color from 'src/constants/Color';
import MyText from '../MyText/MyText';

const UtilsCard = ({Icon, sizeIcon, nameIcon, title, onTap }) => {
  return (
    <Pressable onPress={() => onTap()} style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? Color.WHITE_ACTIVE
          : Color.WHITE
      },
      styles.container
    ]}>
      <Icon name={nameIcon} size={sizeIcon} color={Color.PRIMARY_YELLOW_COLOR} />
      <MyText title={title} variant="h5" style={{fontSize: 9}} />
    </Pressable>
  )
}

export default UtilsCard