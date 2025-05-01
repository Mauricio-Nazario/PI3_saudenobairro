import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.colors.background,
    padding: themas.spacing.lg,
  },
  boxTop: {
    height: windowHeight / 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMid: {
    width: '100%',
    paddingHorizontal: themas.spacing.xxl,
    marginBottom: themas.spacing.lg,
  },
  boxBottom: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: themas.typography.weights.bold,
    marginTop: themas.spacing.lg,
    fontSize: themas.typography.sizes.xxl,
    color: themas.colors.primary,
  },
  titleInput: {
    marginLeft: themas.spacing.xs,
    color: themas.colors.gray,
    marginBottom: themas.spacing.xs,
    fontSize: themas.typography.sizes.sm,
    fontWeight: themas.typography.weights.semiBold,
  },
  boxInput: {
    width: '100%',
    height: 50,
    borderWidth: themas.borders.width.thin,
    borderRadius: themas.borders.radius.full,
    marginBottom: themas.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: themas.spacing.md,
    backgroundColor: themas.colors.input,
    borderColor: themas.colors.grayLight,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: themas.typography.sizes.md,
    color: themas.colors.text,
    paddingVertical: themas.spacing.sm,
    paddingLeft: themas.spacing.sm,
  },
  button: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.colors.primary,
    borderRadius: themas.borders.radius.full,
    marginTop: themas.spacing.md,
    ...themas.shadows.sm,
  },
  textButton: {
    fontSize: themas.typography.sizes.md,
    color: themas.colors.white,
    fontWeight: themas.typography.weights.bold,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: themas.spacing.lg,
    width: '100%',
  },
  textBottom: {
    fontSize: themas.typography.sizes.md,
    color: themas.colors.gray,
  },
});