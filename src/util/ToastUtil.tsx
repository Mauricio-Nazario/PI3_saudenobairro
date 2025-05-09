import Toast from "react-native-toast-message";


export default class ToastUtil {
  static show(message: string) {
    Toast.show({
      type: "info",
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      position: "bottom"
    });
  }

  static showSuccessMessage(message: string) {
    Toast.show({
      type: "success",
      text1: message,
      visibilityTime: 3000
    });
  }

  static showSuccessWithTitle(title: string, message: string) {
    Toast.show({
      type: "success",
      text1: title,
      text2: message,
      visibilityTime: 3000,
      position: "bottom"
    });
  }

  static showErrorMessage(message: string) {
    Toast.show({
      type: "error",
      text1: message,
    })
  }

  static showErrorWithTitle(title: string, message: string) {
    Toast.show({
      type: "error",
      text1: title,
      text2: message,
    })
  }

  static showInfoMessage(message: string) {
    Toast.show({
      type: "info",
      text1: message,
    })
  }

  static showWarningMessage(message: string) {
    Toast.show({
      type: "warning",
      text1: message,
    })
  }
};