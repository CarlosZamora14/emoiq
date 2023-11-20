import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {
  WelcomeScreen,
  HomeScreen,
  LearningPathScreen,
  LecturesScreen,
  ThoughtsScreen,
} from './screens';

import { COLORS, icons } from './constants';

const Tab = createBottomTabNavigator();

function MyTabs({ onLayoutRootView }) {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        tabBarActiveTintColor: COLORS.yellow,
        tabBarInactiveTintColor: COLORS.darkBlue,
      }}
    >
      <Tab.Screen
        name="Welcome"
        options={{
          tabBarLabel: 'Welcome',
          headerShown: false,
          tabBarStyle: { display: 'none' },
          tabBarButton: () => null,
        }}
      >
        {props => <WelcomeScreen {...props} onLayout={onLayoutRootView} />}
      </Tab.Screen>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <icons.HomeIcon color={color} width="32" height="32" />
          ),
        }}
      >
        {props => <HomeScreen {...props} onLayout={onLayoutRootView} />}
      </Tab.Screen>
      <Tab.Screen
        name="LearningPath"
        options={{
          tabBarLabel: 'Ruta',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <icons.RouteIcon color={color} width="32" height="32" />
          ),
        }}
      >
        {props => <LearningPathScreen {...props} onLayout={onLayoutRootView} />}
      </Tab.Screen>
      <Tab.Screen
        name="Lectures"
        options={{
          tabBarLabel: 'Lecturas',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <icons.PageIcon color={color} width="32" height="32" />
          ),
        }}
      >
        {props => <LecturesScreen {...props} onLayout={onLayoutRootView} />}
      </Tab.Screen>
      <Tab.Screen
        name="Thoughts"
        options={{
          tabBarLabel: 'Pensamientos',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <icons.NotebookIcon color={color} width="32" height="32" />
          ),
        }}
      >
        {props => <ThoughtsScreen {...props} onLayout={onLayoutRootView} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function Navigation({ onLayoutRootView }) {
  return (
    <NavigationContainer>
      <MyTabs onLayoutRootView={onLayoutRootView} />
    </NavigationContainer>
  );
};