import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class AnimalSearch extends Component {

  render() {
    const { handleChangeNome, handleChangeLocalizacao } = this.props;

    return (
      <View>
        <View style={[styles.searchContainer, styles.searchNome]}>
          <Icon style={styles.iconSearch} name="md-search" />
          <TextInput 
            style={styles.inputSearch}
            placeholder="Nome"
            onChange={(event) => {handleChangeNome(event.nativeEvent.text)}}
          />
        </View>
        <View style={[styles.searchContainer, styles.searchLocalizacao]}>
          <Icon style={styles.iconSearch} name="md-search" />
          <TextInput 
            style={styles.inputSearch}
            placeholder="Localização"
            onChange={(event) => {handleChangeLocalizacao(event.nativeEvent.text)}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white'
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

export default AnimalSearch;
