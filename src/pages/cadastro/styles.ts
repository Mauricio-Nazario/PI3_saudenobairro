import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: themas.colors.background || "#fff",
    padding: 20,
    justifyContent: 'center',
  },
  boxTop: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: themas.colors.primary,
  },
  boxMid: {
    marginBottom: 20,
  },
  titleInput: {
    fontSize: 14,
    color: themas.colors.gray,
    marginBottom: 4,
    marginTop: 10,
    alignSelf:'flex-start',
    paddingLeft: 8,
  },
  BoxInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themas.colors.input || "#f2f2f2",
    paddingHorizontal: 12,
    borderRadius: 16, 
    marginBottom: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: themas.colors.text || "#333",
  },
  boxBotton: {
    marginTop: 10,
    alignItems:'center',
  },
  button:{
    width:250,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:themas.colors.primary,
    borderRadius:40,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textButton: {
    color: themas.colors.white || "#fff",
    fontWeight: 'bold',
  },
});


