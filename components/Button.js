import { StyleSheet, Text, Pressable } from 'react-native';

export default function Button(props) {
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: props.backgroundColor || '#2DB8BD' }
      ]}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'gg sans medium',
  },
});