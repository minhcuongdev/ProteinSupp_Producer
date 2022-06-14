import { View } from 'react-native'
import React from 'react'
import styles from './TwoCircleHeaderStyles'

const TwoCircleHeader = () => {


  return (
    <View style={styles.header}>
      <View style={styles.headerRedCircle}></View>
      <View style={[styles.headerYellowCircle,{top: -30}]}></View>
    </View>
  )
}

export default TwoCircleHeader