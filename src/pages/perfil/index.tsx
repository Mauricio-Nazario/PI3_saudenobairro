import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../@types/navigation';
import { styles } from './styles';
import { themas } from '../../global/themes';
import { Input } from '../../components/input';



import uuid from 'react-native-uuid';

export default function Perfil() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [loading, setLoading] = useState(false);
  const [documentId, setDocumentId] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    photo: null as string | null
  });

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Precisamos acessar sua galeria para alterar a foto');
      }
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {

      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar seus dados');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  const handleSelectPhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        setLoading(true);

        const response = await fetch(imageUri);
        const blob = await response.blob();

        setUserData({ ...userData });

        Alert.alert('Foto atualizada com sucesso!');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível selecionar ou enviar a imagem');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    if (!documentId) return;

    setLoading(true);
    try {


      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível atualizar seu perfil.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível sair da conta.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={themas.colors.primary} />
        </TouchableOpacity>

        <Text style={styles.title}>Meu Perfil</Text>

        <TouchableOpacity onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color={themas.colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.photoContainer}>
        <TouchableOpacity onPress={handleSelectPhoto}>
          {userData.photo ? (
            <Image source={{ uri: userData.photo }} style={styles.photo} />
          ) : (
            <View style={styles.photoPlaceholder}>
              <MaterialIcons name="person" size={60} color={themas.colors.gray} />
            </View>
          )}
          <View style={styles.editPhotoButton}>
            <MaterialIcons name="edit" size={18} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Input
          label="Nome completo"
          value={userData.name}
          onChangeText={(text) => setUserData({ ...userData, name: text })}
          icon="person"
          placeholder="Digite seu nome completo"
        />

        <Input
          label="E-mail"
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
          icon="email"
          keyboardType="email-address"
          placeholder="seu@email.com"
        />

        <Input
          label="Telefone"
          value={userData.phone}
          onChangeText={(text) => setUserData({ ...userData, phone: text })}
          icon="phone"
          keyboardType="phone-pad"
          placeholder="(00) 00000-0000"
        />

        <Input
          label="Data de nascimento"
          value={userData.birthDate}
          onChangeText={(text) => setUserData({ ...userData, birthDate: text })}
          icon="cake"
          placeholder="DD/MM/AAAA"
        />
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleUpdateProfile}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
