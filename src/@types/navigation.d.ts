import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Senha: undefined;
  Home: undefined;
  Agendamento: undefined;
  Perfil: undefined;
};

// Tipos para uso nos componentes
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type AgendamentoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Agendamento'>;
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Perfil'>;