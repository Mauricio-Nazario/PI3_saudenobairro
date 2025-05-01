import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: themas.colors.background,
    padding: 20,
  },
  boxTop: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: themas.colors.primary,
    marginTop: 10,
  },
  boxMid: {
    marginBottom: 20,
  },
  titleInput: {
    fontSize: 14,
    color: themas.colors.gray,
    marginBottom: 4,
    marginTop: 10,
    paddingLeft: 8,
    alignSelf: "flex-start", 
  },
  BoxInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themas.colors.input,
    borderRadius: 16,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  calendarContainer: {
    backgroundColor: themas.colors.input,
    borderRadius: 16,
    padding: 10,
    marginBottom: 8,
    height: 260, 
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    flex: 1,
    height: 50,
  },
  picker: {
    color: themas.colors.text,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: themas.colors.text,
  },
  boxBotton: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themas.colors.primary,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textButton: {
    color: themas.colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  textBottom: {
    fontSize: 16,
    color: themas.colors.gray,
    textAlign: "center",
    marginTop: 15,
  },
});

