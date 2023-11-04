import { useCallback, useMemo, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";

// Components
import { Button, Login, Signup } from '../components';

// Assets
import { images } from '../constants';

export default function WelcomeScreen(props) {
  const [isLoginSelected, setIsLoginSelected] = useState(true);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', '74%'], []);

  const fadeInOpacity = useSharedValue(1);

  const fadeIn = () => {
    fadeInOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.linear,
    });
  };

  const fadeOut = () => {
    fadeInOpacity.value = withTiming(0, {
      duration: 400,
      easing: Easing.linear,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeInOpacity.value,
    };
  });

  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      fadeIn();
    }
  }, []);

  return (
    <SafeAreaView onLayout={props.onLayout} style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.container}>
        <Image source={images.background} style={styles.background} />
        <View style={styles.welcomeMessage}>
          <View style={{ height: 180, backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingTop: 24 }}>
            <MaskedView
              style={styles.maskedView}
              maskElement={
                <View style={styles.maskElement}>
                  <Text style={styles.title}>HOLA</Text>
                </View>
              }
            >
              <Image source={images.background} style={[styles.background, { opacity: 0.9 }]} />
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

        <Animated.View
          style={[
            styles.buttonsContainer,
            animatedStyle,
          ]}
        >
          <Button
            text='Iniciar sesión'
            onHandlePress={() => {
              setIsLoginSelected(true);
              bottomSheetRef.current.expand();
              fadeOut();
            }}
          />
          <Button
            text='Registrarse'
            backgroundColor='#002D52'
            onHandlePress={() => {
              setIsLoginSelected(false);
              bottomSheetRef.current.expand();
              fadeOut();
            }}
          />
        </Animated.View>

        <StatusBar style='auto' />

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          enablePanDownToClose
          snapPoints={snapPoints}
          backgroundStyle={{
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
          onChange={handleSheetChanges}
        >
          {isLoginSelected ? <Login /> : <Signup />}
        </BottomSheet>
      </GestureHandlerRootView>
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