import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  body: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: "space-between"
  },
  textFieldWrapper: {
    width: "100%",
    marginBottom: 40,
    marginTop: 80
  },
  textForgotPassword: {
    marginTop: 20,
    marginBottom: 40,
  },
  textSignUpWrapper: {
    flexDirection: "row",
    marginTop: 30,
  },
  buttonWrapper: {
    width: '100%',
  }
});

export default styles