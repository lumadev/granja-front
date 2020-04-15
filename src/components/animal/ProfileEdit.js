import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Picker} from '@react-native-community/picker';
import {API_URL} from '../../app.consts';

import Toast from 'react-native-simple-toast';

class ProfileEdit extends Component {
  state = {
    animal: null,
    showLoader: false,
  };

  componentDidMount() {
    const animalId = this.props.navigation.getParam('animalId');

    axios.get(`${API_URL}/animal/${animalId}`).then((res) => {
      const animal = res.data[0];

      this.setState({ animal });
    });
  }

  handleChangeValue(value, column) {
    const { animal } = this.state;
    animal[column] = value;

    this.setState({ animal });
  }

  editAnimal() {
    this.setState({ showLoader: true });

    let { status, nome } = this.state.animal;
    status = status.toLowerCase();

    const animalId = this.props.navigation.getParam('animalId');
    const data = { status, nome };

    axios.put(`${API_URL}/animal/${animalId}`, data).then((res) => {
      Toast.show('Animal salvo com sucesso');

      this.setState({ showLoader: false });
      this.props.navigation.navigate('Home')

    }).catch(error => {
      Toast.show('Ocorreu um erro, por favor tente novamente.');
    });
  }

  render() {
    const { animal, showLoader } = this.state;

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.containerEdit}>
            <View>
              <Text style={styles.label}>Nome</Text>
              <TextInput 
                style={styles.input} 
                value={animal?.nome}
                onChange={(event) => {this.handleChangeValue(event.nativeEvent.text, 'nome')}}></TextInput>
            </View>
            <View>
              <Text style={[styles.label, styles.labelStatus]}>Status</Text>
              <Picker
                selectedValue={animal?.status}
                style={styles.select}
                onValueChange={(status) => this.handleChangeValue(status, 'status')}
              >
                <Picker.Item label="Ativo" value="ativo" />
                <Picker.Item label="Inativo" value="inativo" />
              </Picker>
            </View>
            <TouchableOpacity 
              style={styles.botaoSalvarContainer} 
              onPress={() => this.editAnimal()} title="Salvar">
              <Text style={styles.botaoSalvar}>Salvar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loaderContainer}>
            { showLoader === true ? <ActivityIndicator style={styles.loaderContainer} size="large" color="black" /> : null }
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerEdit: {
    marginTop: 20,
    marginHorizontal: 20
  },
  label: {
    fontSize: 16
  },
  labelStatus: {
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    paddingLeft: 16,
    marginTop: 8,
    backgroundColor: 'white'
  },
  select: {
    backgroundColor: 'white'
  },
  botaoSalvarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'black',
    height: 40,
    borderRadius: 3
  },
  botaoSalvar: {
    color: 'white'
  }
});

export default ProfileEdit;
