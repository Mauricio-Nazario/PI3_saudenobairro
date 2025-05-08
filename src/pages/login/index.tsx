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

// Firebase Auth
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    if (!email || !password) {
      return Alert.alert('Atenção', 'Preencha todos os campos');
    }

    if (!email.includes('@') || !email.includes('.')) {
      return Alert.alert('Atenção', 'Informe um email válido');
    }

    setLoading(true);
    const auth = getAuth();

    try {
      // 🔐 Login com Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ Sucesso: ir para a Home
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });

    } catch (error: any) {
      console.error("Erro ao fazer login:", error);
      let mensagem = 'Erro ao fazer login. Verifique suas credenciais.';

      if (error.code === 'auth/user-not-found') {
        mensagem = 'Usuário não encontrado.';
      } else if (error.code === 'auth/wrong-password') {
        mensagem = 'Senha incorreta.';
      } else if (error.code === 'auth/invalid-email') {
        mensagem = 'E-mail inválido.';
      }

      Alert.alert('Erro', mensagem);
    } finally {
      setLoading(false);
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
