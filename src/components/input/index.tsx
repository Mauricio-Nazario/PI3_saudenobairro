import React, { forwardRef } from "react";

import { View,Text,TextInput } from 'react-native';
import { style } from "./styles";
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";

export const Input = forwardRef(()=>{
    return(
        <View style={style.BoxInput}>
            <TextInput 
               
            />
            <MaterialIcons
                name='email'
                size={20}
                color={themas.colors.gray}
            />
        </View>
    )


})