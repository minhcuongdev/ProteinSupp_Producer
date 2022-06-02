import { KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React, {useState} from 'react'

import TwoCircleHeader from 'src/components/TwoCircleHeader/TwoCircleHeader'
import MyText from 'src/components/MyText/MyText'
import MyTextField from 'src/components/MyTextField/MyTextField'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'

import styles from './LoginStyles'
import Color from 'src/constants/Color'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} enabled={false} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TwoCircleHeader/>
          <View style={styles.body}>
            <View>
              <MyText title={"Welcome Back"} variant="body1" color={Color.PRIMARY_YELLOW_COLOR} />
              <MyText title={"You can perform their business tasks"} variant="h3" color={Color.PRIMARY_YELLOW_COLOR} />
            </View>
            <View style={styles.textFieldWrapper}>
              <MyTextField value={email} onChangeText={setEmail} placeholder={"Enter your email"}  />
              <MyTextField value={password} style={styles.textForgotPassword} onChangeText={setPassword} placeholder={"Enter your password"} secureTextEntry={true}  />            
            </View>
            <View style={styles.buttonWrapper}>
              <PrimaryButton title={"Sign in"} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login