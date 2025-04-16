import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themas.colors.background,
        padding: 20,
        justifyContent: 'center'
    },
    boxTop: {
        alignItems: 'center',
        marginBottom: 20
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: themas.colors.primary
    },
    boxMid: {
        marginVertical: 20
    },
    titleInput: {
        fontSize: 14,
        color: themas.colors.gray,
        marginBottom: 4,
        marginTop: 12
    },
    BoxInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: themas.colors.input,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 5
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        color: themas.colors.text
    },
    boxBotton: {
        marginTop: 20
    },
    button: {
        backgroundColor: themas.colors.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: themas.colors.white,
        fontWeight: 'bold'
    },
    textBottom: {
        textAlign: 'center',
        marginTop: 20,
        color: themas.colors.gray
    }
});
