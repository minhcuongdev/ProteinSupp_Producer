import { View, FlatList, Pressable } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'

import styles from './ScrollableTabsStyles'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'

const ItemButton = ({ title, isActive, id, action }) => {

  return (
    <Pressable onPress={() => action(id)}>
      <View style={[styles.itemButtonContainer, { backgroundColor: isActive ? Color.PRIMARY_YELLOW_COLOR : Color.WHITE }]}>
        <MyText
          title={title}
          variant={isActive ? "h1" : "h2"}
          color={isActive ? Color.WHITE : Color.PRIMARY_YELLOW_COLOR}
          style={styles.text}
        />
      </View>
    </Pressable>
  )
}

const ScrollableTabs = ({index, setIndex}) => {
  const categories = [{
    id: 0,
    title: "Protein gain weight",
    isActive: true
  }, {
    id: 1,
    title: "Energy & Health",
    isActive: false
  }, {
    id: 2,
    title: "Lose fat & Lose weight",
    isActive: false
  },]

  const ref = useRef(null)

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.4      
    })
  }, [index])

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        data={categories}
        renderItem={({ item, index: fIndex }) => <ItemButton id={fIndex} action={setIndex} title={item.title} isActive={index === fIndex ? true : false} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ScrollableTabs