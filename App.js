import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { TextStroke } from './components/TextStroke';
import MaskedView from '@react-native-masked-view/masked-view';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'gg-sans-test': require('./assets/fonts/ggsans-Normal.ttf'),
    'gg-sans-test2': require('./assets/fonts/ggsans-Normal2.ttf'),
    'gg-sans-Bold': require('./assets/fonts/gg-sans-Bold.ttf'),
    'gg-sans-Semibold': require('./assets/fonts/gg-sans-Semibold.ttf'),
    'gg-sans-Medium': require('./assets/fonts/gg-sans-Medium.ttf'),
    'gg-sans-Regular': require('./assets/fonts/gg-sans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Image source={require('./assets/Background.png')} style={styles.background} />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.7)', 'transparent']}
        locations={[0.6, 1.0]}
        style={styles.welcomeMessage}
      >
        <MaskedView
          // style={{ flex: 1, flexDirection: 'row', height: '100%' }}
          style={{ flex: 1, flexDirection: 'row' }}
          maskElement={
            <View
              style={{
                // Transparent background because mask is based off alpha channel
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                // height: '100%'
              }}
            >
              {/* <TextStroke stroke={1} color={'#FFFFFF'}>
          <Text style={styles.title}>HOLA</Text>
        </TextStroke> */}
              <Text style={styles.title}>HOLA</Text>
            </View>
          }
        >
          {/* <View style={{ flex: 1, backgroundColor: '#000', opacity: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} /> */}
          <Image source={require('./assets/Background.png')} style={{ opacity: 0.6 }} />
        </MaskedView>
        <Text
          style={[
            styles.subtitle,
            {
              position: 'absolute',
              top: 160,
              left: 32
            }
          ]}
        >
          Que gusto tenerte de vuelta...
        </Text>
        {/* <TextStroke stroke={1} color={'#FFFFFF'}>
          <Text style={styles.title}>HOLA</Text>
        </TextStroke> */}
        {/* <TextStroke stroke={0.9} color={'#FFFFFF'}>
        </TextStroke> */}
      </LinearGradient>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      <View style={styles.buttomContainer}>
        <Pressable
          style={[styles.btnInicioSesion, styles.btnInicio]}
        >
          <Text style={styles.btnTexto}>Iniciar Sesión</Text>
        </Pressable>

        <Pressable
          style={[styles.btnRegistrarse, styles.btnInicio]}
        >
          <Text style={styles.btnTexto}>Registrarse</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
    // overlayColor:'red',
    // backgroundBlendMode: 'multiply',
  },
  welcomeMessage: {
    alignSelf: 'stretch',
    justifySelf: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 16,
    height: '50%',

  },
  title: {
    color: '#000000',
    fontSize: 128,
    fontWeight: 'bold',
    fontFamily: 'gg-sans-Bold',
    // textShadowColor: 'red',
    // textShadowRadius: 1,
    // textShadowOffset: {width: 2, height: -12}
  },
  subtitle: {
    color: '#B7C8A9',
    fontSize: 24,
    opacity: 0.5,
    // fontFamily: 'gg-sans-Medium',
    fontFamily: 'gg-sans-test2',
    // textShadowColor: 'black',
    // textShadowRadius: 10
  },
  btnInicioSesion: {
    width: '80%',
    padding: 16,
    marginVertical: 5,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#2DB8BD',
  },
  btnRegistrarse: {
    display: 'flex',
    width: '80%',
    padding: 16,
    marginVertical: 5,
    marginBottom: 30,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#002D52',
  },
  btnTexto: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'gg-sans-Medium',
  },
  buttomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 40,
  },
});
