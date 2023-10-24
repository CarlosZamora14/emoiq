import { StyleSheet, Text, Pressable } from 'react-native';

export default function Button({ backgroundColor, text, ...rest }) {
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: backgroundColor || '#2DB8BD' }
      ]}
      {...rest}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 16,
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'gg sans medium',
  },
});