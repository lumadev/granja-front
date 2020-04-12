import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Alert} from 'react-native';
import {API_URL} from '../../app.consts';
import AnimalCard from './AnimalCard';
import AppUtils from '../../app.utils';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Icon from 'react-native-vector-icons/Ionicons';

class AnimalList extends Component {
  state = {
    animalsApi: [],
    animals: [],
    nomeSearch: '',
    localizacaoSearch: ''
  };

  componentDidMount() {
    axios.get(`${API_URL}/animal`).then((res) => {
      const animals = res.data;
      this.setState({ 
        animals,
        animalsApi: animals
      });
    });
  }

  navigateToProfile() {
    this.props.navigation.navigate('Profile')
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
          <View style={[styles.searchContainer, styles.searchNome]}>
            <Icon style={styles.iconSearch} name="md-search" />
            <TextInput 
              style={styles.inputSearch}
              placeholder="Nome"
              onChange={(event) => {this.handleChangeNome(event.nativeEvent.text)}}
            />
          </View>
          <View style={[styles.searchContainer, styles.searchLocalizacao]}>
            <Icon style={styles.iconSearch} name="md-search" />
            <TextInput 
              style={styles.inputSearch}
              placeholder="Localização"
              onChange={(event) => {this.handleChangeLocalizacao(event.nativeEvent.text)}}
            />
          </View>
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
    color: '#1c1c1c',
  },
  cardContainer: {
    marginBottom: 12
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 8
  },
  searchNome: {
    marginTop: 10
  },
  searchLocalizacao: {
    marginTop: 10,
    marginBottom: 4
  },
  iconSearch: {
    marginLeft: 14,
    flex: 0.08,
    fontSize: 20,
    color: '#c0c0c0'
  },
  inputSearch: {
    flex: 0.92
  }
});

export default AnimalList;
