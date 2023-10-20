import { StyleSheet, Text, Pressable, Image, View } from 'react-native';

export default function OAuthButton({ borderColor, text, Logo, color, ...rest }) {
  return (
    <Pressable
      style={[
        styles.button,
        { borderColor: borderColor || 'rgba(0, 45, 82, 0.6)' }
      ]}
      {...rest}
    >
      <View style={styles.content}>
        <Logo style={styles.icon} />
        <Text style={[
          styles.text,
          { color: color || 'rgba(0, 0, 0, 0.6)' }
        ]}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
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
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'gg sans regular',
  },
});