import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Agendamento from "../pages/agendamento";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Agendamento"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#FFF",
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Agendamento" component={Agendamento} />
    </Stack.Navigator>
  );
}
