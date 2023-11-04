import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

// Theme
import { COLORS, SIZES, FONT } from '../constants';

function InputField({ label, placeholder, isPassword = false }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Shadow
        distance={8}
        startColor={`${COLORS.darkBlue}09`}
        offset={[4, 4]}
        stretch
      >
        <TextInput
          secureTextEntry={isPassword}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          style={styles.input}
        />
      </Shadow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: SIZES.small / 2,
  },
  label: {
    color: COLORS.black,
    fontFamily: FONT.regular,
    fontSize: SIZES.large + 2,
  },
  input: {
    width: '100%',
    padding: SIZES.medium,
    paddingTop: SIZES.large - 2,
    backgroundColor: COLORS.lightWhite,
    color: COLORS.darkBlue,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium + 2,
    borderRadius: 20,
  }
});

export default InputField;