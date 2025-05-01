import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { themas } from '../../global/themes'; 
import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  const proximasConsultas = [
    { id: 1, data: '15/10/2025', horario: '14:00', medico: 'Dr. Silva', especialidade: 'Cardiologia' },
    { id: 2, data: '20/10/2025', horario: '10:30', medico: 'Dra. Costa', especialidade: 'Dermatologia' }
  ];

  return (
    <View style={styles.container}>
      {/* 1. Cabeçalho Simples */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logo} 
          resizeMode='contain'
        />
        <Text style={styles.title}>Bem-vindo ao Saúde no Bairro</Text>
      </View>

      {/* 2. Cards de Acesso Rápido (Horizontal) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('Agendamento' as never)}
        >
          <MaterialCommunityIcons name="calendar-plus" size={32} color={themas.colors.primary} />
          <Text style={styles.cardText}>Agendar Consulta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
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

      {/* 3. Próximas Consultas */}
      <Text style={styles.sectionTitle}>Próximas Consultas</Text>
      
      {proximasConsultas.length > 0 ? (
        proximasConsultas.map(consulta => (
          <View key={consulta.id} style={styles.consultaCard}>
            <Text style={styles.consultaData}>{consulta.data} às {consulta.horario}</Text>
            <Text style={styles.consultaMedico}>{consulta.medico}</Text>
            <Text style={styles.consultaEspecialidade}>{consulta.especialidade}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Nenhuma consulta agendada</Text>
      )}

      {/* 4. Botão Fixo (Opcional) */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('Agendamento' as never)}
      >
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}