import { StyleSheet, View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Assets
import backgroundImage from '../assets/background.png';
import FacebookLogo from '../assets/facebook-logo.svg';
import GoogleLogo from '../assets/google-logo.svg';

// Components
import OAuthButton from './OAuthButton';

export default function Signup(props) {
  return (
    <View style={styles.formWrapper}>
      <Text style={{ fontFamily: 'gg sans semibold', fontSize: 32, textAlign: 'center', }}>Signup</Text>
      <View style={styles.OAuthWrapper}>
        <OAuthButton Logo={FacebookLogo} text='Facebook' />
        <OAuthButton Logo={GoogleLogo} text='Google' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
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