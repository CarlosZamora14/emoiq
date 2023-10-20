import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

// Components
import Button from '../components/Button.js';

// Assets
import backgroundImage from '../assets/background.png';

export default function WelcomeScreen(props) {
  return (
    <SafeAreaView onLayout={props.onLayout} style={styles.container}>
      <Image source={backgroundImage} style={styles.background} />
      <View style={styles.welcomeMessage}>
        <View style={{ height: '20%', backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>
          <MaskedView
            style={styles.maskedView}
            maskElement={
              <View style={styles.maskElement}>
                <Text style={styles.title}>HOLA</Text>
              </View>
            }
          >
            <Image source={backgroundImage} style={[styles.background, { opacity: 0.9 }]} />
          </MaskedView>
        </View>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.7)', 'transparent']}
          locations={[0.2, 1.0]}
          style={styles.gradient}
        >
          <Text style={styles.subtitle}>
            Que gusto tenerte de vuelta...
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.buttonsContainer}>
        <Button text='Iniciar sesión' onPress={() => props.navigation.navigate('Login')}/>
        <Button text='Registrarse' backgroundColor='#002D52' />
      </View>

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  welcomeMessage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  maskedView: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
  },
  maskElement: {
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    backgroundColor: 'transparent',
  },
  gradient: {
    paddingHorizontal: 24,
    height: 140,
    alignSelf: 'stretch',
  },
  title: {
    color: '#000000',
    fontSize: 128,
    fontWeight: 'bold',
    fontFamily: 'gg sans bold',
  },
  subtitle: {
    color: '#C9D09A',
    fontSize: 24,
    opacity: 0.5,
    fontFamily: 'gg sans medium',
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    rowGap: 20,
    width: '80%',
    marginBottom: 64,
  },
});