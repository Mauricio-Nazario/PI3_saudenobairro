import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    BoxInput:{
            width:'100%',
            height:40,
            borderWidth:1,
            borderRadius:40,
            marginTop:10,
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:5,
            backgroundColor:themas.colors.grayLight,
            borderColor:themas.colors.grayLight,
        },
        input:{
            width:'90%',
            height:'100%',
            borderRadius:40,
            paddingLeft:5
        },
})