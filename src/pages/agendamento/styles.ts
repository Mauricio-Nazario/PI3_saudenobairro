import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.background,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: themas.colors.text,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: themas.colors.input,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: themas.colors.text,
    marginBottom: 12,
  },
  button: {
    backgroundColor: themas.colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: themas.colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    alignItems: "center",
    padding: 10,
  },
  backButtonText: {
    color: themas.colors.gray,
    fontSize: 14,
  },
});
