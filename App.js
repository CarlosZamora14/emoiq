import { useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Screens
import WelcomeScreen from './screens/WelcomeScreen.js';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'gg sans regular': require('./assets/fonts/gg-sans-regular.ttf'),
    'gg sans medium': require('./assets/fonts/gg-sans-medium.ttf'),
    'gg sans semibold': require('./assets/fonts/gg-sans-semibold.ttf'),
    'gg sans bold': require('./assets/fonts/gg-sans-bold.ttf'),
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
    <WelcomeScreen onLayout={onLayoutRootView} />
  );
}