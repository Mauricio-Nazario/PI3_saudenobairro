import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from "./styles";
import Logo from '../../assets/logo.png';
import { themas } from "../../global/themes";

{/* Definir os tipos de navegação */}
type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  Agendamento: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export default function Login() {

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);
      
      if (!email || !password) {
        Alert.alert('Atenção', 'Preencha todos os campos');
        setLoading(false);
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        Alert.alert('Atenção', 'Informe um email válido');
        setLoading(false);
        return;
      }

      // Simulação de chamada API
      setTimeout(() => {
        setLoading(false);
        {/* Alterado para navegar para Home */}
        navigation.navigate('Home');
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Falha ao fazer login');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.boxTop}>
        <Image 
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Saúde no bairro</Text>
      </View>
      
      <View style={styles.boxMid}>
        <Text style={styles.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={styles.boxInput}>
          <TextInput 
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="exemplo@email.com"
            placeholderTextColor={themas.colors.gray}
            autoCapitalize="none"
          />
          <MaterialIcons
            name="email"
            size={20}
            color={themas.colors.gray}
          />
        </View>
        
        <Text style={styles.titleInput}>SENHA</Text>
        <View style={styles.boxInput}>
          <TextInput 
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="Digite sua senha"
            placeholderTextColor={themas.colors.gray}
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color={themas.colors.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.boxBottom}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={themas.colors.white} />
          ) : (
            <Text style={styles.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.textBottom}>Não tem conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={{ color: themas.colors.primary }}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}