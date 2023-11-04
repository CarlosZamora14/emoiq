import { StyleSheet, Text, Pressable } from 'react-native';

export default function Button({ backgroundColor, text, onHandlePress }) {
  return (
    <Pressable
      style={styles.button(backgroundColor)}
      onPress={onHandlePress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (backgroundColor) => ({
    width: '100%',
    padding: 16,
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: backgroundColor || '#2DB8BD',
  }),
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'gg sans medium',
  },
});