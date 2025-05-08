import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.background,
    padding: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row', // alinhamento horizontal
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themas.colors.primary,
  },
  subtitle: {
    fontSize: 14,
    color: themas.colors.gray,
  },
  cardsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: themas.colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: themas.colors.text,
  },
  consultaCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  consultaData: {
    fontWeight: 'bold',
    color: themas.colors.primary,
  },
  consultaMedico: {
    fontSize: 16,
    marginTop: 5,
    color: themas.colors.text,
  },
  consultaEspecialidade: {
    color: themas.colors.gray,
    marginTop: 3,
  },
  emptyText: {
    textAlign: 'center',
    color: themas.colors.gray,
    marginTop: 20,
    fontSize: 14,
  },
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    backgroundColor: themas.colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});


