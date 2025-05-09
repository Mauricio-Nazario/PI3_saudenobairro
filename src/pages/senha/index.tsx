import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { style } from "../senha/styles";
import { themas } from "../../global/themes";

// Firebase

type RouteParams = {
  dadosCadastro: {
    nome: string;
    dataNascimento: string;
    cpf: string;
    endereco: string;
    telefone: string;
  }
};

export default function SenhaScreen() {
  const route = useRoute();
  const { dadosCadastro } = route.params as RouteParams;
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [forcaSenha, setForcaSenha] = useState(0);
  const [loading, setLoading] = useState(false);

  const validarForcaSenha = (text: string): void => {
    let forca = 0;
    if (text.length >= 8) forca += 1;
    if (/\d/.test(text)) forca += 1;
    if (/[A-Z]/.test(text)) forca += 1;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(text)) forca += 1;
    setForcaSenha(forca);
  };

  const handleFinalizarCadastro = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Alert.alert('E-mail inválido', 'Digite um e-mail válido');
    }

    if (email !== confirmarEmail) {
      return Alert.alert('Erro', 'Os e-mails não coincidem');
    }

    if (senha !== confirmarSenha) {
      return Alert.alert('Erro', 'As senhas não coincidem');
    }

    if (forcaSenha < 3) {
      return Alert.alert(
        'Senha fraca',
        'A senha deve conter:\n- 8 caracteres\n- Um número\n- Uma letra maiúscula\n- Um caractere especial'
      );
    }

    setLoading(true);

    try {
      Alert.alert('Sucesso', 'Cadastro completo!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      });

    } catch (error: any) {
      console.error("Erro ao cadastrar:", error);

      let mensagem = 'Erro ao cadastrar. Tente novamente.';

      if (error.code === 'auth/email-already-in-use') {
        mensagem = 'E-mail já está em uso.';
      } else if (error.code === 'auth/invalid-email') {
        mensagem = 'E-mail inválido.';
      } else if (error.code === 'auth/weak-password') {
        mensagem = 'Senha fraca.';
      }

      Alert.alert('Erro', mensagem);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={style.header}>
        <Text style={style.titulo}>Criar Senha</Text>
        <Text style={style.subtitulo}>Última etapa do cadastro</Text>
      </View>

      <View style={style.formulario}>
        <View style={style.campoContainer}>
          <Text style={style.rotulo}>E-MAIL</Text>
          <View style={style.inputContainer}>
            <TextInput
              style={style.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <MaterialIcons name="email" size={20} color={themas.colors.gray} />
          </View>
        </View>

        <View style={style.campoContainer}>
          <Text style={style.rotulo}>CONFIRMAR E-MAIL</Text>
          <View style={style.inputContainer}>
            <TextInput
              style={style.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={confirmarEmail}
              onChangeText={setConfirmarEmail}
            />
            <MaterialIcons name="email" size={20} color={themas.colors.gray} />
          </View>
        </View>

        <View style={style.campoContainer}>
          <Text style={style.rotulo}>CRIAR SENHA</Text>
          <View style={style.inputContainer}>
            <TextInput
              style={style.input}
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={(text) => {
                setSenha(text);
                validarForcaSenha(text);
              }}
            />
            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
              <MaterialIcons
                name={mostrarSenha ? 'visibility-off' : 'visibility'}
                size={24}
                color={themas.colors.gray}
              />
            </TouchableOpacity>
          </View>

          <View style={style.forcaContainer}>
            {[...Array(4)].map((_, index) => (
              <View
                key={index}
                style={[
                  style.barraForca,
                  {
                    backgroundColor: index < forcaSenha
                      ? (forcaSenha >= 3 ? '#4CAF50' : '#FFC107')
                      : '#E0E0E0'
                  }
                ]}
              />
            ))}
          </View>
        </View>

        <View style={style.campoContainer}>
          <Text style={style.rotulo}>CONFIRMAR SENHA</Text>
          <View style={style.inputContainer}>
            <TextInput
              style={style.input}
              secureTextEntry={!mostrarSenha}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
            <MaterialIcons name="lock" size={24} color={themas.colors.gray} />
          </View>
        </View>
      </View>

      <View style={style.botaoContainer}>
        <TouchableOpacity
          style={style.botao}
          onPress={handleFinalizarCadastro}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={style.textoBotao}>Finalizar Cadastro</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={style.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={style.textoBotaoVoltar}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

