import { View, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Color from 'src/constants/Color';
import styles from './HeaderStyles'

const HeaderLeft = ({ canGoBack }) => {
  const navigation = useNavigation();

  return (
    <View>
      {canGoBack &&
        <Pressable  style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.PRIMARY_YELLOW_COLOR_3
              : Color.PRIMARY_YELLOW_COLOR
          },
          styles.headerLeft
        ]} onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={24} color={Color.WHITE} />
        </Pressable>
      }
    </View>
  )
}

export default HeaderLeft