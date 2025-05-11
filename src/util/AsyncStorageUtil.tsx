import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

class AsyncStorageUtil {

    static async saveValue(key: string, value: string): Promise<void> {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.error(`Erro ao salvar o valor em AsyncStorage: ${error}`);
            throw error;
        }
    }

    public static async getItem(key: string): Promise<string | null> {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.error(`Erro ao pegar o valor de AsyncStorage: ${error}`);
            throw error;
        }
    }

    static getValue(key: string) {
        const [value, setValue] = React.useState<string | null>(null);

        React.useEffect(() => {
            const fetchValue = async () => {
                try {
                    const storedValue = await AsyncStorageUtil.getItem(key);
                    setValue(storedValue);
                } catch (error) {
                    console.error(`Erro ao buscar o valor de AsyncStorage no useEffect: ${error}`);
                }
            };
            fetchValue().then(r => r);
        }, [key]);
        return value;
    }
}

export default AsyncStorageUtil;