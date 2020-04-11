import React, { Component } from 'react';
import axios from 'axios';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Alert } from 'react-native';
import { API_URL } from '../../app.consts';
import AnimalCard from './AnimalCard';

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

  delete(animalId) {
    axios.delete(`${API_URL}/animal/${animalId}`).then((res) => {
      const { animals } = this.state;
      const animalsList = animals.filter(res => res.id !== animalId);

      this.setState({ animals: animalsList });
    });
  }

  createAlertDelete(animalId) {
    Alert.alert(
      'Deseja realmente excluir o animal?',
      '',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'Ok', onPress: () => this.delete(animalId)},
      ],
      {cancelable: false},
    );
  }

  render() {
    const { animals } = this.state;
    let cards = null;

    if (animals.length > 0) {
      cards = animals.map((item, index) => {
        return (
          <AnimalCard 
            key={item.id} 
            animal={item}
            createAlertDelete={this.createAlertDelete.bind(this)}>
          </AnimalCard>
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
  }
});

export default AnimalList;
