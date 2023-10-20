import { StyleSheet, View, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Assets
import backgroundImage from '../assets/background.png';
import FacebookLogo from '../assets/facebook-logo.svg';
import GoogleLogo from '../assets/google-logo.svg';

// Components
import OAuthButton from '../components/OAuthButton';

export default function LoginScreen(props) {
  return (
    <SafeAreaView onLayout={props.onLayout} style={styles.container}>
      <Image source={backgroundImage} style={styles.background} />
      <View style={styles.formWrapper}>
        <View style={styles.OAuthWrapper}>
          <OAuthButton Logo={FacebookLogo} text='Facebook' />
          <OAuthButton Logo={GoogleLogo} text='Google' />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    opacity: 0.8,
  },
  formWrapper: {
    height: '70%',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  OAuthWrapper: {
    flexDirection: 'row',
    columnGap: 16,
    paddingHorizontal: 24,
    marginBottom: 40,
  },
});