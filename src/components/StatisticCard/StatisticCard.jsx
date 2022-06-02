import { View } from 'react-native'
import React from 'react'
import Color from 'src/constants/Color'
import { Divider } from 'react-native-paper'

import styles from './StatisticCardStyles'
import MyText from '../MyText/MyText'
import { AntDesign } from '@expo/vector-icons';

const StatisticCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statisticWrapper}>
        <View>
          <MyText title={"Today turnover"} />
          <MyText title={"9.250.000đ"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View>
          <MyText title={"Interest"} />
          <MyText title={"5.250.000đ"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
      </View>
      <Divider />
      <View style={styles.reportWrapper}>
        <AntDesign name="barschart" size={25} color="black" />
        <MyText title={"Interest Report"} variant="h4" style={{marginLeft: 10}} />
      </View>
    </View>
  )
}

export default StatisticCard