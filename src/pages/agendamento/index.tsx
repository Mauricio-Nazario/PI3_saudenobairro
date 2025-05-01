import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import { themas } from "../../global/themes";
import Logo from "../../assets/logo.png";

export default function Agendamento() {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false); // 👈 dropdown
  const [selectedTime, setSelectedTime] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [medico, setMedico] = useState("");

  const horariosDisponiveis = [
    "08:00", "09:00", "10:00", "11:00",
    "14:00", "15:00", "16:00", "17:00"
  ];

  const handleConfirmar = () => {
    console.log({
      data: selectedDate?.toISOString(),
      horario: selectedTime,
      especialidade,
      medico,
    });
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.boxTop}>
          <Image
            source={Logo}
            style={style.logo}
            resizeMode="contain"
          />
          <Text style={style.text}>Agendar Consulta</Text>
        </View>

        <View style={style.boxMid}>
          {/* Dropdown de Data */}
          <Text style={style.titleInput}>SELECIONE A DATA</Text>

          <TouchableOpacity
            style={style.BoxInput}
            onPress={() => setMostrarCalendario(!mostrarCalendario)}
          >
            <Text style={style.input}>
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : "Selecionar data"}
            </Text>
            <MaterialIcons
              name="calendar-today"
              size={20}
              color={themas.colors.gray}
            />
          </TouchableOpacity>

          {mostrarCalendario && (
            <View style={style.calendarContainer}>
              <CalendarPicker
                onDateChange={(date) => {
                  setSelectedDate(date);
                  setMostrarCalendario(false);
                }}
                selectedDayColor={themas.colors.primary}
                selectedDayTextColor="#FFFFFF"
                todayBackgroundColor={themas.colors.gray}
                width={280}
                height={240}
                scaleFactor={375}
                months={[
                  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                ]}
                weekdays={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]}
                previousTitle="Anterior"
                nextTitle="Próximo"
                textStyle={{ color: themas.colors.text }}
                headerWrapperStyle={{
                  backgroundColor: themas.colors.background,
                }}
              />
            </View>
          )}

          {/* Picker de Horário */}
          <Text style={style.titleInput}>SELECIONE O HORÁRIO</Text>
          <View style={[style.BoxInput, { paddingHorizontal: 0 }]}>
            <Picker
              selectedValue={selectedTime}
              onValueChange={(itemValue) => setSelectedTime(itemValue)}
              style={{
                flex: 1,
                color: themas.colors.text,
                marginLeft: 10
              }}
              dropdownIconColor={themas.colors.gray}
            >
              <Picker.Item label="Selecione um horário" value="" />
              {horariosDisponiveis.map((horario) => (
                <Picker.Item key={horario} label={horario} value={horario} />
              ))}
            </Picker>
            <MaterialIcons
              name="access-time"
              size={20}
              color={themas.colors.gray}
              style={{ marginRight: 10 }}
            />
          </View>

          {/* Especialidade */}
          <Text style={style.titleInput}>ESPECIALIDADE MÉDICA</Text>
          <View style={style.BoxInput}>
            <TextInput
              style={style.input}
              placeholderTextColor={themas.colors.gray}
              value={especialidade}
              onChangeText={setEspecialidade}
            />
            <MaterialIcons name="medical-services" size={20} color={themas.colors.gray} />
          </View>

          {/* Médico */}
          <Text style={style.titleInput}>NOME DO MÉDICO</Text>
          <View style={style.BoxInput}>
            <TextInput
              style={style.input}
              placeholderTextColor={themas.colors.gray}
              value={medico}
              onChangeText={setMedico}
            />
            <MaterialIcons name="person" size={20} color={themas.colors.gray} />
          </View>
        </View>

        <View style={style.boxBotton}>
          <TouchableOpacity
            style={style.button}
            onPress={handleConfirmar}
            disabled={!selectedDate || !selectedTime}
          >
            <Text style={style.textButton}>Confirmar Agendamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 15 }}
            onPress={() => navigation.goBack()}
          >
            <Text style={style.textBottom}>
              Voltar para <Text style={{ color: themas.colors.primary }}>Home</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


