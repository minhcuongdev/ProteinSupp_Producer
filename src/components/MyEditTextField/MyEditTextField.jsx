import { View, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'
import MyText from '../MyText/MyText'
import styles from './MyEditTextFieldStyles'
import Color from 'src/constants/Color'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInputMask } from 'react-native-masked-text'
import { FormatBirthday } from 'src/utils/Calculator';
import { FontAwesome } from '@expo/vector-icons';


const MyEditTextField = ({ title, value, setValue, multiline = false, keyboardType="default", numberOfLines = 1 }) => {
  return (
    <View style={styles.container}>
      <MyText title={title} color={Color.NEUTRAL_02} style={styles.title} />
      <TextInput multiline={multiline} numberOfLines={numberOfLines} value={value} style={styles.textInput} selectionColor={Color.BLACK} onChangeText={setValue} keyboardType={keyboardType} />
    </View>
  )
}

export const MyEditTextFieldBirthday = ({title, value, setValue}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const datetime = new Date(date)

    const birthday = FormatBirthday(datetime.getUTCDate(),datetime.getUTCMonth(), datetime.getUTCFullYear())
    setValue(birthday)
    hideDatePicker();
  };


  return(
    <View style={styles.container}>
      <MyText title={title} color={Color.NEUTRAL_02} style={styles.title} />
      <View style={{position: 'relative'}}>
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        style={styles.textInput} selectionColor={Color.BLACK}
        value={value}
        onChangeText={text => setValue(text)}
      />
      <Pressable onPress={showDatePicker} style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? Color.WHITE_ACTIVE
              : Color.WHITE
          },
          styles.iconCalender
        ]} >
        <FontAwesome name="calendar" size={20} color={Color.PRIMARY_YELLOW_COLOR} />
      </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
  </View>
  )
  
}

export default MyEditTextField