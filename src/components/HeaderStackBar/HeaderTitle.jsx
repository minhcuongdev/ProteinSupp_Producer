import { View, Text } from 'react-native'
import React from 'react'

import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'

const HeaderTitle = ({ children }) => {

  return (
    <View>
      <MyText title={children} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={{ fontSize: 18, marginTop: 10 }} />
    </View>
  )
}

export default HeaderTitle