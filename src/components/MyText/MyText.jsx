import { Text } from 'react-native'
import React from 'react'

import styles from './MyTextStyles'

const MyText = ({ title, variant = 'h3', color, style = {}, numberOfLines = 1 }) => {
  return (
    <Text style={[styles[variant],  { color: color }, style ]} numberOfLines={numberOfLines}>{title}</Text>
  )
}

export default MyText