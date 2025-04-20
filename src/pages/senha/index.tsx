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

{/*Definindo tipos para os parâmetros de navegação*/}
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
    
    const [email, setEmail] = useState<string>('');
    const [confirmarEmail, setConfirmarEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);
    const [forcaSenha, setForcaSenha] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    {/*Função tipada para validar força da senha*/}
    const validarForcaSenha = (text: string): void => {
        let forca = 0;
        if (text.length >= 8) forca += 1;
        if (/\d/.test(text)) forca += 1;
        if (/[A-Z]/.test(text)) forca += 1;
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(text)) forca += 1;
        setForcaSenha(forca);
    };

    {/*Função tipada para o cadastro final*/}
    const handleFinalizarCadastro = async (): Promise<void> => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            Alert.alert('E-mail inválido', 'Digite um e-mail válido');
            return;
        }

        if (email !== confirmarEmail) {
            Alert.alert('Erro', 'Os e-mails não coincidem');
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        if (forcaSenha < 3) {
            Alert.alert('Senha fraca', 'A senha deve conter:\n- 8 caracteres\n- Um número\n- Uma letra maiúscula\n- Um caractere especial');
            return;
        }

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            Alert.alert('Sucesso', 'Cadastro completo!');
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            });
        } catch (error) {
            Alert.alert('Erro', 'Falha ao finalizar cadastro');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={style.container}>
            {/* Cabeçalho */}
            <View style={style.header}>
                <Text style={style.titulo}>Criar Senha</Text>
                <Text style={style.subtitulo}>Última etapa do cadastro</Text>
            </View>

            {/* Formulário */}
            <View style={style.formulario}>
                {/* Campo Email */}
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

                {/* Campo Confirmar Email */}
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

                {/* Campo Senha */}
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
                    
                    {/* Indicador de Força (sem textos soltos) */}
                    <View style={style.forcaContainer}>
                        {[...Array(4)].map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    style.barraForca,
                                    { 
                                        backgroundColor: index < forcaSenha ? 
                                        (forcaSenha >= 3 ? '#4CAF50' : '#FFC107') : '#E0E0E0' 
                                    }
                                ]}
                            />
                        ))}
                    </View>
                </View>

                {/* Campo Confirmar Senha */}
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

            {/* Botões - Container separado */}
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