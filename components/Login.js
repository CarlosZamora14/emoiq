import { StyleSheet, View, Text } from 'react-native';

// Assets
import { icons } from '../constants';

// Components
import OAuthButton from './OAuthButton';

export default function Login(props) {
  return (
    <View style={styles.formWrapper}>
      <Text style={{ fontFamily: 'gg sans semibold', fontSize: 32, textAlign: 'center', }}>Login</Text>
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