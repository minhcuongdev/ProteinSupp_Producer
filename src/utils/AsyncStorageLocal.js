import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAccountToDevice = async (account) => {
  try {
    const jsonValue = JSON.stringify(account)
    await AsyncStorage.setItem('account', jsonValue)
  } catch (error) {
    console.log(error)
  }
}

export const saveAccessTokenToDevice = async (token) => {
  try {
    const jsonValue = JSON.stringify(token)
    await AsyncStorage.setItem('accessToken', jsonValue)
  } catch (error) {
    console.log(error)
  }
}

export const saveRefreshTokenToDevice = async (token) => {
  try {
    const jsonValue = JSON.stringify(token)
    await AsyncStorage.setItem('refreshToken', jsonValue)
  } catch (error) {
    console.log(error)
  }
}

export const getRefreshTokenFromDevice = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("refreshToken");

    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    } else return null;
  } catch (error) {
    console.log(error);
  }
};