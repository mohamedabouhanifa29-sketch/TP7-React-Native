import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import AppBar from './screens/AppBar';

// IMPORT DES SCREENS
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SendParcelScreen from './screens/SendParcelScreen';
import TravellerScreen from './screens/TravellerScreen';

// Création des navigateurs
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- Navigation par pile (Stack) ---
function HomeStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          title: "Accueil",
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />

      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Détails" }}
      />

      <Stack.Screen
        name="EnvoyerColis"
        component={SendParcelScreen}
        options={{ title: "Envoyer un colis" }}
      />

      <Stack.Screen
        name="Voyageur"
        component={TravellerScreen}
        options={{ title: "Je voyage" }}
      />

    </Stack.Navigator>
  );
}

// --- Navigation par onglets ---
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

        <AppBar />   

        <NavigationContainer>

          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { backgroundColor: '#f0f0f0' },
              tabBarLabelStyle: { fontSize: 14 },
            }}
          >

            <Tab.Screen
              name="Maison"
              component={HomeStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />

            <Tab.Screen
              name="Paramètres"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" size={size} color={color} />
                ),
              }}
            />

          </Tab.Navigator>

        </NavigationContainer>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
