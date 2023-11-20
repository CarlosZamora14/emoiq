import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigation
import Navigation from './Navigation.js';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

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

  return <Navigation onLayoutRootView={onLayoutRootView} />;

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Welcome">
  //       <Stack.Screen name="Welcome" options={{ headerShown: false }}>
  //         {props => <WelcomeScreen {...props} onLayout={onLayoutRootView} />}
  //       </Stack.Screen>
  //     </Stack.Navigator>
  //   </NavigationContainer >
  // );
}