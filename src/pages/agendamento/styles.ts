import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: themas.colors.background,
    padding: 40,
  },
  boxTop: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: themas.colors.primary,
    marginTop: 10,
  },
  boxMid: {
    marginBottom: 10,
  },
  titleInput: {
    fontSize: 14,
    color: themas.colors.gray,
    marginBottom: 4,
    marginTop: 10,
    paddingLeft: 8,
    alignSelf: "flex-start", 
  },
  selectContainer: {
    width: '100%',
    height: 50,
    backgroundColor: themas.colors.input,
    borderRadius: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  calendarContainer: {
    backgroundColor: themas.colors.input,
    borderRadius: 20,
    padding: 40,
    marginBottom: 18,
    height: 260, 
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    flex: 1,
    color: themas.colors.text,
    marginLeft: -5,
  },
  selectText: {
    flex: 1,
    fontSize: 16,
    color: themas.colors.text,
    paddingVertical: 10,
    paddingLeft: 10,
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
 
  backButton: {
    width: 250,
    marginTop: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themas.colors.gray,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  backButtonText: {
    color: themas.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

