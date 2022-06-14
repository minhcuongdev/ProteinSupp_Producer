import { View } from 'react-native'
import React from 'react'

import { Dialog } from '@rneui/themed';
import styles from './MyDialogStyles'
import MyText from '../MyText/MyText';
import Color from 'src/constants/Color';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const MyDialog = ({ content, titleButton, isVisibleDialog, handleOnPress }) => {

  return (
    <Dialog
      isVisible={isVisibleDialog}
    >
      <View style={styles.textContainer}>
        <MyText title={content} numberOfLines={2} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={{width: "70%"}}>
          <PrimaryButton title={titleButton} style={styles.button} handleOnPress={() => handleOnPress()} />
        </View>
      </View>
    </Dialog>
  )
}

export const MyDialogConfirm = ({ content, isVisibleDialog, submit, cancel }) => {

  return (
    <Dialog
      isVisible={isVisibleDialog}
    >
      <View style={styles.textContainer}>
        <MyText title={content} numberOfLines={2} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ flex: 1 }}>
          <PrimaryButton title={"No"} style={styles.buttonNo} handleOnPress={() => cancel()} marginRight={5} color={Color.PRIMARY_RED_COLOR} />
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryButton title={"yes"} style={styles.buttonYes} handleOnPress={() => submit()} marginLeft={5} />
        </View>
      </View>
    </Dialog>
  )
}

export const MyDialogLoading = ({isVisible}) => {
  return(
    <Dialog isVisible={isVisible} >
      <Dialog.Loading />
    </Dialog>
  )
}


export default MyDialog