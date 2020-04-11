import React, { Component } from 'react';
import axios from 'axios';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { API_URL } from '../../app.consts';

import Icon from 'react-native-vector-icons/Ionicons';

class AnimalList extends Component {
  state = {
    animals: [],
  };

  componentDidMount() {
    axios.get(`${API_URL}/animal`).then((res) => {
      const animals = res.data;
      this.setState({ animals });
    });
  }

  render() {
    const { animals } = this.state;
    let cards = null;

    if (animals.length > 0) {
      cards = animals.map((item, index) => {
        return (
          <View style={styles.card}>
            <View>
              <Text style={styles.nomeAnimal}>{item.nome}</Text>
            </View>
            <View style={styles.containerInfo}>
              <View>
                <View>
                  <Text style={styles.subtitulo}>Tipo de Animal</Text>
                </View>
                <View style={styles.tipoAnimalContainer}>
                  <View style={styles.tipoAnimalBadge}>
                    <Text style={styles.tipoAnimal}>{item.tipo}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.containerPeso}>
                <View>
                  <Text style={styles.subtitulo}>Peso</Text>
                </View>
                <View style={styles.pesoAnimal}>
                  <Text style={styles.pesoAnimal}>344,5 kg</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.localAnimalContainer}>
                <Icon style={styles.iconeLocal} name="md-home" size={25} />
                <Text style={styles.localAnimal}>Galpão 1</Text>
              </View>
            </View>
          </View>
        );
      });
    }

    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.title}>Lista de animais</Text>
          {cards}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    marginLeft: 25,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 25,
    color: '#1c1c1c',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8ff',
  },
  card: {
    marginTop: 8,
    marginHorizontal: 16,
    padding: 10,
    borderWidth: 2,
    borderColor: '#daeff8',
    borderRadius: 8,
  },
  nomeAnimal: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  containerPeso: {
    marginRight: 75,
    paddingLeft: 15,
    borderLeftWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dcdcdc',
  },
  subtitulo: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#808080',
  },
  tipoAnimalContainer: {
    marginTop: 5,
  },
  tipoAnimalBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 22,
    borderRadius: 12,
    backgroundColor: '#0047ab',
  },
  tipoAnimal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  pesoAnimal: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  localAnimalContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  iconeLocal: {
    fontSize: 22,
    color: '#0047ab',
  },
  localAnimal: {
    marginTop: 3,
    marginLeft: 6,
    color: '#696969',
  },
});

export default AnimalList;
