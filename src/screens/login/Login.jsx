import { KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

import TwoCircleHeader from 'src/components/TwoCircleHeader/TwoCircleHeader'
import MyText from 'src/components/MyText/MyText'
import MyTextField from 'src/components/MyTextField/MyTextField'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { saveAccountToDevice, saveAccessTokenToDevice, saveRefreshTokenToDevice } from 'src/utils/AsyncStorageLocal';
import { login } from 'src/redux/slices/accountSlice';
import { useDispatch } from 'react-redux';

import { setSnackBar } from 'src/redux/slices/snackBarSlice';
import authApi from 'src/apis/authApi';
import { HelperText } from 'react-native-paper';
import styles from './LoginStyles'
import Color from 'src/constants/Color'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const callApi = async (account) => {
    try {
      const accountUser = await authApi.login(account)
      saveAccountToDevice(accountUser)
      saveAccessTokenToDevice(accountUser.accessToken)
      saveRefreshTokenToDevice(accountUser.refreshToken)
      dispatch(login(accountUser))
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    }
  }

  const handleSignIn = () => {
    const account = {
      email: email.trim(),
      password: password,
    }

    callApi(account)
  }

  const hasErrors = () => {
    return !email.includes('@') && email !== "";
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} enabled={false} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TwoCircleHeader />
          <View style={styles.body}>
            <View style={{ width: "100%" }}>
              <MyText numberOfLines={2} title={"Welcome Back! Producer"} variant="body1" color={Color.PRIMARY_YELLOW_COLOR} />
              <MyText title={"You can perform their business tasks"} variant="h3" color={Color.PRIMARY_YELLOW_COLOR} />

              <View style={styles.textFieldWrapper}>
                <MyTextField value={email} onChangeText={setEmail} placeholder={"Enter your email"} />
                <HelperText type="error" visible={hasErrors()}>
                  Email is invalid!
                </HelperText>
                <MyTextField value={password} style={styles.textForgotPassword} onChangeText={setPassword} placeholder={"Enter your password"} secureTextEntry={true} />
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <PrimaryButton title={"Sign in"} handleOnPress={() => handleSignIn()} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login