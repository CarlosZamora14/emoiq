import { StyleSheet, View, Text } from 'react-native';

// Assets and theme
import { icons, SIZES, COLORS, FONT } from '../constants';

// Components
import OAuthButton from './OAuthButton.js';
import InputField from './InputField.js';
import Button from './Button.js';

export default function Signup(props) {
  return (
    <View style={styles.formWrapper}>
      <View style={styles.formContainer}>
        <InputField
          label="Email"
          placeholder="Ingrese su email"
        />
        <InputField
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          isPassword
        />
        <InputField
          label="Confirma tu contraseña"
          placeholder="Repite tu contraseña"
          isPassword
        />
        <Button text="Registrarse" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', paddingVertical: SIZES.small / 3 }}>
        <View style={styles.line} />
        <View style={{ alignItems: 'center', paddingHorizontal: SIZES.xSmall }}>
          <Text style={styles.text}>ó</Text>
        </View>
        <View style={styles.line} />
      </View>

      <View style={{ marginBottom: SIZES.medium }}>
        <Text style={styles.text}>Inicia sesión</Text>
      </View>
      <View style={styles.OAuthWrapper}>
        <OAuthButton Logo={icons.FacebookLogo} text='Facebook' />
        <OAuthButton Logo={icons.GoogleLogo} text='Google' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  OAuthWrapper: {
    flexDirection: 'row',
    columnGap: 16,
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  formContainer: {
    width: '80%',
    rowGap: SIZES.large,
    marginBottom: SIZES.medium,
  },
  line: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
    height: 1,
  },
  text: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.darkBlue,
  },
});