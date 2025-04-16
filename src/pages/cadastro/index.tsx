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
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function handleCadastro() {
        if (!nome || !sobrenome || !dataNascimento || !cpf || !endereco || !email || !telefone || !senha || !confirmarSenha) {
            return Alert.alert('Atenção', 'Preencha todos os campos!');
        }

        if (senha !== confirmarSenha) {
            return Alert.alert('Erro', 'As senhas não coincidem.');
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            Alert.alert('Cadastro Realizado', 'Usuário cadastrado com sucesso!');
            navigation.goBack(); // volta para login
        }, 2000);
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.boxTop}>
                <Text style={style.text}>Cadastro de Paciente</Text>
            </View>

            <View style={style.boxMid}>
                {/* campos */}
                <Text style={style.titleInput}>NOME</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} value={nome} onChangeText={setNome} />
                    <MaterialIcons name="person" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>SOBRENOME</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} value={sobrenome} onChangeText={setSobrenome} />
                    <MaterialIcons name="person-outline" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>DATA DE NASCIMENTO</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} placeholder="DD/MM/AAAA" value={dataNascimento} onChangeText={setDataNascimento} />
                    <MaterialIcons name="event" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>CPF</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} value={cpf} onChangeText={setCpf} keyboardType="numeric" />
                    <MaterialIcons name="badge" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>ENDEREÇO RESIDENCIAL</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} value={endereco} onChangeText={setEndereco} />
                    <MaterialIcons name="home" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>E-MAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
                    <MaterialIcons name="email" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>TELEFONE CELULAR</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />
                    <MaterialIcons name="phone-android" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} secureTextEntry value={senha} onChangeText={setSenha} />
                    <MaterialIcons name="lock" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>CONFIRMAR SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />
                    <MaterialIcons name="lock-outline" size={20} color={themas.colors.gray} />
                </View>
            </View>

            <View style={style.boxBotton}>
                <TouchableOpacity style={style.button} onPress={handleCadastro}>
                    {loading ? <ActivityIndicator /> : <Text style={style.textButton}>Cadastrar</Text>}
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, { backgroundColor: themas.colors.gray, marginTop: 10 }]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={style.textButton}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
