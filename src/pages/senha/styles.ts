import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: themas.colors.background,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themas.colors.primary,
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: themas.colors.gray,
  },
  formulario: {
    width: '100%',
  },
  campoContainer: {
    marginBottom: 15,
  },
  rotulo: {
    fontSize: 14,
    color: themas.colors.gray,
    marginBottom: 4,
    fontWeight: '600',
    paddingLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themas.colors.input,
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 40,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: themas.colors.text,
  },
  forcaContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 5,
  },
  barraForca: {
    height: 4,
    flex: 1,
    borderRadius: 2,
  },
  // Container para os botões
  botaoContainer: {
    marginTop: 20,
    alignItems: 'center',
    gap: 15,
  },
  // Botão principal
  botao: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.colors.primary,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  // Botão voltar
  botaoVoltar: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.colors.gray, // Cor diferente
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textoBotao: {
    color: themas.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textoBotaoVoltar: {
    color: themas.colors.white, // Cor do texto diferente
    fontWeight: '600',
    fontSize: 16,
  }
});