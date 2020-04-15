import React, { Component } from 'react';
import axios from 'axios';
import { Dimensions, StyleSheet, FlatList, View, Text, Alert } from 'react-native';
import {API_URL} from '../../app.consts';
import AnimalSearch from './AnimalSearch';
import AnimalCard from './AnimalCard';
import AppUtils from '../../app.utils';

const itemsPerPage = 5;

class AnimalList extends Component {
  state = {
    animalsApi: [],
    animals: [],
    nomeSearch: '',
    localizacaoSearch: '',
    showLoader: false,
    page: 1,
    loadingItems: false
  };

  componentDidMount() {
    this.listaAnimais();
  }

  listaAnimais() {
    const isSearching = this.state.nomeSearch !== '' || this.state.localizacaoSearch !== '';
    if (isSearching) {
      return;
    }
    const { page, animals } = this.state;

    this.setState({ loadingItems: true });

    axios.get(`${API_URL}/animal?limit=${itemsPerPage}&page=${page}`).then((res) => {
      const animalsApi = res.data;

      this.setState({ 
        animals: [ ...animals, ...animalsApi ],
        animalsApi: [ ...animals, ...animalsApi ],
        page: page + 1,
        loadingItems: false
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

  renderItem = ({ item }) => (
    <AnimalCard 
      key={item.id} 
      animal={item}
      navigateToProfile={this.navigateToProfile.bind(this)}
      createAlertDelete={this.createAlertDelete.bind(this)}>
    </AnimalCard>
  );

  render() {
    const { animals } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de animais</Text>
        <AnimalSearch 
          handleChangeNome={this.handleChangeNome.bind(this)}
          handleChangeLocalizacao={this.handleChangeLocalizacao.bind(this)}>
        </AnimalSearch>
        <FlatList
          data={animals}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          onEndReached={this.listaAnimais.bind(this)}
          onEndReachedThreshold={0.1}
        />
        <View style={styles.lastItem}></View>
      </View>
    );
  }
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
  },
  title: {
    marginTop: 50,
    marginLeft: 25,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 25,
    color: '#1c1c1c'
  },
  lastItem: {
    marginBottom: 37
  }
});

export default AnimalList;
