import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import findBookingAction from "../../services/booking/FindBookingAction";
import {Booking} from "../../models/booking/Booking";

export default function Historico() {
  const [consultas, setConsultas] = useState<Booking[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await findBookingAction.findBookingsHistory({});
      setConsultas(response);
    };
    fetchData().then(r => console.log("Carregado a lista"));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id || ''}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.data}>{item.date} às {item.hour}</Text>
            <Text style={styles.medico}>{item.doctorName}</Text>
            <Text style={styles.especialidade}>{item.specialty}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma consulta realizada ainda.</Text>
        }
      />
    </View>
  );
}
