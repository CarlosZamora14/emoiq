import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function OAuthButton({ borderColor, text, Logo, color }) {
  return (
    <Pressable
      style={styles.button(borderColor)}
    >
      <View style={styles.content}>
        <Logo style={styles.icon} />
        <Text style={styles.text(color)}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (borderColor) => ({
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: borderColor || 'rgba(0, 45, 82, 0.6)',
  }),
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 4,
  },
  icon: {
    width: 32,
    height: 32,
  },
  text: (color) => ({
    color: color || 'rgba(0, 0, 0, 0.6)',
    fontSize: 20,
    fontFamily: 'gg sans regular',
  }),
});