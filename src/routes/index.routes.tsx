import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Agendamento from "../pages/agendamento";
import SenhaScreen from "../pages/senha";
import Home from "../pages/home";
import Perfil from "../pages/perfil";
import { RootStackParamList } from "../@types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#FFF",
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Senha" component={SenhaScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen 
        name="Perfil" 
        component={Perfil}
        options={{ 
          headerShown:'True',
          title: 'Meu Perfil', 
          headerBackTitle:'Voltar',
        }}
      />
      <Stack.Screen 
        name="Agendamento" 
        component={Agendamento}
        options={{
          headerShown: true,
          title: 'Agendar Consulta',
          headerBackTitle: 'Voltar',
        }}
      />
    </Stack.Navigator>
  );
}
