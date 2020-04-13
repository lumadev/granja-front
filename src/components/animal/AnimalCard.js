import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, View, Text} from 'react-native';
import TipoAnimalBadge from './TipoAnimalBadge';

import Icon from 'react-native-vector-icons/Ionicons';

class AnimalCard extends Component {

  render() {
    const { animal, navigateToProfile, createAlertDelete } = this.props;

    return (
      <TouchableHighlight onPress={() => navigateToProfile(animal.id)} underlayColor="white">
        <View style={styles.card}>
          <View style={styles.container}>
            <View style={styles.containerAnimal}>
              <View>
                <Text style={styles.nomeAnimal}>{animal.nome}</Text>
              </View>
              <View style={styles.containerInfo}>
                <View>
                  <View>
                    <Text style={styles.subtitulo}>Tipo de Animal</Text>
                  </View>
                  <View style={styles.tipoAnimalContainer}>
                    <TipoAnimalBadge tipoAnimal={animal.tipo}></TipoAnimalBadge>
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
                  <Text style={styles.localAnimal}>{animal.localizacao}</Text>
                </View>
              </View>
            </View>
            <View style={styles.containerBotoes}>
              <Icon style={styles.icon} name="md-eye" />
              <Icon style={styles.icon} name="md-trash" onPress={() => createAlertDelete(animal.id)} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    marginTop: 8,
    marginHorizontal: 16,
    padding: 10,
    borderWidth: 2,
    borderColor: '#daeff8',
    borderRadius: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerAnimal: {
    flex: 0.93,
  },
  containerBotoes: {
    flex: 0.07,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 30,
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
    marginRight: 40,
    marginLeft: 70,
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
  icon: {
    fontSize: 22,
  },
});

export default AnimalCard;
