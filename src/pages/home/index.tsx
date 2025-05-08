import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import {
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import {
  collection,
  query,
  where,
  onSnapshot
} from 'firebase/firestore';

import { themas } from '../../global/themes';
import { styles } from './styles';
import Logo from '../../assets/logo.png';
import { db } from '../../services/fireBaseConfig';

type Consulta = {
  id: string;
  data: string;
  horario: string;
  medico: string;
  especialidade: string;
};

export default function Home() {
  const navigation = useNavigation();
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [userEmail, setUserEmail] = useState<string>('');

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setUserEmail(user.email || '');

      const hoje = new Date().toISOString().split('T')[0]; // formato: YYYY-MM-DD
      const q = query(
        collection(db, 'agendamentos'),
        where('uid', '==', user.uid),
        where('data', '>=', hoje)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Consulta, 'id'>),
        }));
        setConsultas(data.sort((a, b) => a.data.localeCompare(b.data)));
      });

      return () => unsubscribe();
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível sair.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <View>
          <Text style={styles.title}>Bem-vindo!</Text>
          {userEmail !== '' && (
            <Text style={styles.subtitle}>{userEmail}</Text>
          )}
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color={themas.colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Acesso Rápido */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardsContainer}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Agendamento' as never)}
        >
          <MaterialCommunityIcons name="calendar-plus" size={32} color={themas.colors.primary} />
          <Text style={styles.cardText}>Agendar Consulta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Historico' as never)}
        >
          <MaterialIcons name="history" size={32} color={themas.colors.primary} />
          <Text style={styles.cardText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Perfil' as never)}
        >
          <MaterialIcons name="person" size={32} color={themas.colors.primary} />
          <Text style={styles.cardText}>Meu Perfil</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Próximas Consultas */}
      <Text style={styles.sectionTitle}>Próximas Consultas</Text>

      {consultas.length > 0 ? (
        consultas.map((consulta) => (
          <View key={consulta.id} style={styles.consultaCard}>
            <Text style={styles.consultaData}>{consulta.data} às {consulta.horario}</Text>
            <Text style={styles.consultaMedico}>{consulta.medico}</Text>
            <Text style={styles.consultaEspecialidade}>{consulta.especialidade}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Nenhuma consulta agendada</Text>
      )}

      {/* Botão flutuante para novo agendamento */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Agendamento' as never)}
      >
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}



