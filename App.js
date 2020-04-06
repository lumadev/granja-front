/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>Lista de animais</Text>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.nomeAnimal}>
                <Text>Cocoricó</Text>
              </View>
              <View style={styles.containerInfo}>
                <View class={styles.containerTipo}>
                  <View style={styles.subtitulo}>
                    <Text>Tipo de Animal</Text>
                  </View>
                  <View style={styles.tipoAnimalBadge}>
                    <Text>Poultry</Text>
                  </View>
                </View>
                <View class={styles.containerPeso}>
                  <View style={styles.subtitulo}>
                    <Text>Peso</Text>
                  </View>
                  <View style={styles.pesoAnimal}>
                    <Text>344,5 kg</Text>
                  </View>
                </View>
              </View>
              <View style={styles.localAnimalContainer}>
                <View style={styles.localAnimalContainer}>
                  <Text>Icone</Text>
                  <Text style={styles.localAnimal}>Galpão 1</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.card}>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  card: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#87ceeb',
    borderRadius: 3,
  },
  nomeAnimal: {

  },
  containerInfo: {
    flexDirection: 'row', 
  },
  containerTipo: {
    flex: 1
  },
  subtitulo: {
    
  },
  tipoAnimalBadge: {
    
  },
  containerPeso: {
    flex: 1
  },
  pesoAnimal: {

  },
  localAnimalContainer: {
    flexDirection: 'row'
  },
  iconeLocal: {

  },
  localAnimal: {

  },
});

export default App;