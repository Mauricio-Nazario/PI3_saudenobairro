import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { style } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function handleCadastro() {
    if (!nome || !dataNascimento || !cpf || !endereco || !telefone) {
      return Alert.alert('Atenção', 'Preencha todos os campos!');
    }

    setLoading(true);

    try {
      // ⏩ Somente navega, dados serão salvos na próxima etapa
      navigation.navigate('Senha', {
        dadosCadastro: {
          nome,
          dataNascimento,
          cpf,
          endereco,
          telefone
        }
      });
    } catch (error) {
      console.error("Erro ao continuar:", error);
      Alert.alert("Erro", "Não foi possível prosseguir para a próxima etapa.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={style.boxTop}>
        <Text style={style.text}>Cadastro de Paciente</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.titleInput}>NOME COMPLETO</Text>
        <View style={style.BoxInput}>
          <TextInput style={style.input} value={nome} onChangeText={setNome} />
          <MaterialIcons name="person" size={20} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>DATA DE NASCIMENTO</Text>
        <View style={style.BoxInput}>
          <TextInput 
            style={style.input} 
            placeholder="DD/MM/AAAA" 
            value={dataNascimento} 
            onChangeText={setDataNascimento} 
          />
          <MaterialIcons name="event" size={20} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>CPF</Text>
        <View style={style.BoxInput}>
          <TextInput 
            style={style.input} 
            value={cpf} 
            onChangeText={setCpf} 
            keyboardType="numeric" 
          />
          <MaterialIcons name="badge" size={20} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>ENDEREÇO</Text>
        <View style={style.BoxInput}>
          <TextInput 
            style={style.input} 
            value={endereco} 
            onChangeText={setEndereco} 
          />
          <MaterialIcons name="home" size={20} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>TELEFONE CELULAR</Text>
        <View style={style.BoxInput}>
          <TextInput 
            style={style.input} 
            value={telefone} 
            onChangeText={setTelefone} 
            keyboardType="phone-pad" 
          />
          <MaterialIcons name="phone-android" size={20} color={themas.colors.gray} />
        </View>
      </View>

      <View style={style.boxBotton}>
        <TouchableOpacity 
          style={style.button} 
          onPress={handleCadastro}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={style.textButton}>Próximo</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[style.button, { 
            backgroundColor: themas.colors.gray, 
            marginTop: 10 
          }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={style.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


