import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../global/themes';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: keyof typeof MaterialIcons.glyphMap;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  placeholder?: string;
}

export function Input({
  label,
  value,
  onChangeText,
  icon,
  keyboardType = 'default',
  secureTextEntry = false,
  placeholder = ''
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={20}
            color={themas.colors.gray}
            style={styles.icon}
          />
        )}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={themas.colors.grayLight}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: themas.colors.gray,
    marginBottom: 8,
    marginLeft: 8,
    fontWeight: '600'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themas.colors.input,
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: themas.colors.grayLight,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: themas.colors.text,
    fontSize: 16,
    height: '100%',
  },
});