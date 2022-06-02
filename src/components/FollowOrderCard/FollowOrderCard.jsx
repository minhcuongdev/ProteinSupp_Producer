import { View } from 'react-native'
import React from 'react'
import MyText from '../MyText/MyText'

import styles from './FollowOrderCardStyles'
import Color from 'src/constants/Color'
import { Feather } from '@expo/vector-icons';
import { Divider } from 'react-native-paper'

const FollowOrderCard = () => {
  return (
    <View style={styles.container}>
      <MyText title={"Follow Orders"} color={Color.PRIMARY_YELLOW_COLOR} variant="h2" />
      <View style={styles.button}>
        <MyText title={"Preparing Order"} />
        <Feather name="chevron-right" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <Divider />
      <View style={styles.button}>
        <MyText title={"Delivering order"} />
        <Feather name="chevron-right" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <Divider />
      <View style={styles.button}>
        <MyText title={"Delivering order"} />
        <Feather name="chevron-right" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
    </View>
  )
}

export default FollowOrderCard