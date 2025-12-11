import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bienvenue sur ColisGo 🚀</Text>
      <Text style={styles.subtitle}>
        La livraison rapide, simple et sécurisée entre particuliers.
      </Text>

      {/* Bouton : Envoyer un colis */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('EnvoyerColis')}
      >
        <Ionicons name="cube-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Envoyer un colis</Text>
      </TouchableOpacity>

      {/* Bouton : Je voyage */}
      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Voyageur')}
      >
        <Ionicons name="airplane-outline" size={24} color="#007AFF" />
        <Text style={styles.secondaryButtonText}>Je voyage</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  secondaryButton: {
    backgroundColor: '#f0f0f0',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 18,
    marginLeft: 10,
  },
});
