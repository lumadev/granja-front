import React, { Component } from 'react';
import axios from 'axios';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Alert } from 'react-native';
import {API_URL} from '../../app.consts';
import AnimalSearch from './AnimalSearch';
import AnimalCard from './AnimalCard';
import AppUtils from '../../app.utils';

class AnimalList extends Component {
  state = {
    animalsApi: [],
    animals: [],
    nomeSearch: '',
    localizacaoSearch: '',
    showLoader: false
  };

  componentDidMount() {
    this.listaAnimais();
  }

  listaAnimais() {
    axios.get(`${API_URL}/animal`).then((res) => {
      const animals = res.data;
      this.setState({ 
        animals,
        animalsApi: animals
      });
    });
  }

  navigateToProfile(animalId) {
    this.props.navigation.navigate('Profile', {animalId})
  }

  handleChangeNome(nomeSearch) {
    const { localizacaoSearch } = this.state;
    this.setState({ nomeSearch });

    this.search(nomeSearch, localizacaoSearch)
  }

  handleChangeLocalizacao(localizacaoSearch) {
    const { nomeSearch } = this.state;
    this.setState({ localizacaoSearch });

    this.search(nomeSearch, localizacaoSearch)
  }

  search(nomeSearch, localizacaoSearch) {
    const { animalsApi } = this.state;

    const nomeFormated = AppUtils.prepareStringToSearch(nomeSearch);
    const localizacaoFormated = AppUtils.prepareStringToSearch(localizacaoSearch);

    if (nomeFormated === '' && localizacaoFormated === '') {
      this.setState({ animals: animalsApi });
      return;
    }

    const animalsSearch = animalsApi.filter((animal) => {
      const nome = AppUtils.prepareStringToSearch(animal.nome);
      const localizacao = AppUtils.prepareStringToSearch(animal.localizacao);

      return nome.includes(nomeFormated) && localizacao.includes(localizacaoFormated);
    });

    this.setState({ animals: animalsSearch });
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
            navigateToProfile={this.navigateToProfile.bind(this)}
            createAlertDelete={this.createAlertDelete.bind(this)}>
          </AnimalCard>
        );
      });
    }

    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.title}>Lista de animais</Text>
          <AnimalSearch 
            handleChangeNome={this.handleChangeNome.bind(this)}
            handleChangeLocalizacao={this.handleChangeLocalizacao.bind(this)}>
          </AnimalSearch> 
          <View style={styles.cardContainer}>
            {cards}
          </View>
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
    color: '#1c1c1c'
  },
  cardContainer: {
    marginBottom: 12
  },
});

export default AnimalList;
