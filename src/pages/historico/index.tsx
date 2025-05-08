import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';
import { themas } from '../../global/themes';

import { getAuth } from 'firebase/auth';
import {
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from '../../services/fireBaseConfig';

type Consulta = {
  id: string;
  data: string;
  horario: string;
  medico: string;
  especialidade: string;
};

export default function Historico() {
  const navigation = useNavigation();
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      carregarHistorico(user.uid);
    }
  }, []);

  async function carregarHistorico(uid: string) {
    try {
      const hoje = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'

      const q = query(
        collection(db, 'agendamentos'),
        where('uid', '==', uid)
      );

      const snapshot = await getDocs(q);

      const historico = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Consulta, 'id'>)
        }))
        .filter(consulta => consulta.data < hoje)
        .sort((a, b) => b.data.localeCompare(a.data)); // ordem decrescente

      setConsultas(historico);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar o histórico');
    }
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={themas.colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Histórico de Consultas</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.data}>{item.data} às {item.horario}</Text>
            <Text style={styles.medico}>{item.medico}</Text>
            <Text style={styles.especialidade}>{item.especialidade}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma consulta realizada ainda.</Text>
        }
      />
    </View>
  );
}
