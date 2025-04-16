import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./styles";

export default function Agendamento() {
  const navigation = useNavigation();

  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [medico, setMedico] = useState("");

  const handleConfirmar = () => {
    // Aqui você pode salvar os dados ou navegar
    console.log({ data, horario, especialidade, medico });
    alert("Agendamento realizado com sucesso!");
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Agendamento</Text>

      <TextInput
        style={style.input}
        placeholder="Data (DD/MM/AAAA)"
        placeholderTextColor="#999"
        value={data}
        onChangeText={setData}
      />

      <TextInput
        style={style.input}
        placeholder="Horário (HH:MM)"
        placeholderTextColor="#999"
        value={horario}
        onChangeText={setHorario}
      />

      <TextInput
        style={style.input}
        placeholder="Especialidade médica"
        placeholderTextColor="#999"
        value={especialidade}
        onChangeText={setEspecialidade}
      />

      <TextInput
        style={style.input}
        placeholder="Nome do médico"
        placeholderTextColor="#999"
        value={medico}
        onChangeText={setMedico}
      />

      <TouchableOpacity style={style.button} onPress={handleConfirmar}>
        <Text style={style.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
        <Text style={style.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
