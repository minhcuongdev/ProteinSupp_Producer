import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './SearchStyles'
import { Ionicons } from '@expo/vector-icons'; 
import Color from 'src/constants/Color';

const Search = ({value, onChange}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-search-sharp" size={24} color={Color.GRAY_03} />
      <TextInput value={value} onChangeText={onChange} style={styles.textInput} placeholder='Search here' placeholderTextColor={Color.GRAY_03} selectionColor={Color.BLACK} />
    </View>
  )
}

export default Search