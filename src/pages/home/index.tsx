import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert, FlatList
} from 'react-native';
import {
    MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {themas} from '../../global/themes';
import {styles} from './styles';
import Logo from '../../assets/logo.png';
import HomeImage from '../../assets/homeImage.jpg';

import findBookingAction from '../../services/booking/FindBookingAction';
import {Booking} from "../../models/booking/Booking";

export default function Home() {
    const navigation = useNavigation();
    const [consultas, setConsultas] = useState<Booking[]>([]);
    const [userEmail, setUserEmail] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await findBookingAction.findBookings({});
            setConsultas(response);
        };
        fetchData().then(r => console.log("Carregado a lista"));
    }, []);

    const handleLogout = async () => {
        try {
            navigation.reset({
                index: 0,
                routes: [{name: 'Login'}]
            });
        } catch (error) {
            Alert.alert("Erro", "Não foi possível sair.");
        }
    };

    return (
        <View style={{padding: 20, flex: 1}}>
            <View style={styles.container}>
                {renderHeader(userEmail, handleLogout)}
                {renderSpeedAccess(navigation)}
            </View>
            {renderNextBooking(consultas)}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('Agendamento' as never)}
            >
                <MaterialIcons name="add" size={28} color="white"/>
            </TouchableOpacity>
        </View>
    );
}

function renderHeader(userEmail: string, handleLogout: () => void) {
    return (
        <View style={styles.header}>
            <Image source={Logo} style={styles.logo} resizeMode="contain"/>
            <View>
                <Text style={styles.title}>Bem-vindo!</Text>
                {userEmail !== '' && (
                    <Text style={styles.subtitle}>{userEmail}</Text>
                )}
            </View>
            <TouchableOpacity onPress={handleLogout}>
                <MaterialIcons name="logout" size={24} color={themas.colors.primary}/>
            </TouchableOpacity>
        </View>
    )
}

function renderSpeedAccess(navigation: any) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardsContainer}
        >
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Agendamento' as never)}
            >
                <MaterialCommunityIcons name="calendar-plus" size={32} color={themas.colors.primary}/>
                <Text style={styles.cardText}>Agendar Consulta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Historico' as never)}
            >
                <MaterialIcons name="history" size={32} color={themas.colors.primary}/>
                <Text style={styles.cardText}>Histórico</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Perfil' as never)}
            >
                <MaterialIcons name="person" size={32} color={themas.colors.primary}/>
                <Text style={styles.cardText}>Meu Perfil</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}


function renderNextBooking(consultas: Booking[]) {
    return (
        <>
            <View style={styles.containerImage}>
                <Image source={HomeImage} style={styles.logoImage} resizeMode="contain"/>
            </View>
            <Text style={styles.sectionTitle}>Próximas Consultas</Text>
            {
                consultas.length > 0 ? (
                    <FlatList
                        style={{paddingHorizontal: 5}}
                        data={consultas}
                        keyExtractor={(item) => item.id || ''}
                        renderItem={({item}) => (
                            <View key={item.id} style={styles.consultaCard}>
                                <Text style={styles.consultaData}>{item.date} às {item.hour}</Text>
                                <Text style={styles.consultaMedico}>{item.doctorName}</Text>
                                <Text style={styles.consultaEspecialidade}>{item.specialty}</Text>
                            </View>
                        )}
                        onEndReachedThreshold={0.2}
                    />
                ) : (
                    console.log("Nenhuma consulta agendada" + consultas.length),
                        <Text style={styles.emptyText}>Nenhuma consulta agendada</Text>
                )
            }
        </>
    );
}