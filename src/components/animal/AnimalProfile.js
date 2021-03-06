import React, { Component } from 'react';
import axios from 'axios';
import { TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import {API_URL} from '../../app.consts';
import TipoAnimalBadge from './TipoAnimalBadge';
import AppUtils from '../../app.utils';

import Icon from 'react-native-vector-icons/Ionicons';

class AnimaProfile extends Component {
  state = {
    animal: null
  };

  formatDate(data) {
    return AppUtils.formataData(data, 'DD/MM/YYYY');
  }

  formatHourAndDate(data) {
    return AppUtils.formataData(data, 'DD/MM/YYYY hh:mm');
  }

  componentDidMount() {
    const animalId = this.props.navigation.getParam('animalId');

    axios.get(`${API_URL}/animal/${animalId}`).then((res) => {
      const animal = res.data[0];

      this.setState({ animal });
    });
  }

  navigateToEdit(animalId) {
    this.props.navigation.navigate('ProfileEdit', {animalId})
  }

  render() {
    const { animal } = this.state;

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.containerProfile}>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>{animal?.nome}</Text>
              <TouchableOpacity style={styles.containerLinkEdit} onPress={() => this.navigateToEdit(animal.id)}>
                <View style={styles.containerEdit}>
                  <Text style={styles.textEdit}>Editar</Text>
                  <Icon style={styles.iconEdit} name="md-create" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.containerBadge}>
              <TipoAnimalBadge tipoAnimal={animal?.tipo}></TipoAnimalBadge>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.tipoInfo, styles.infoFont]}>Status: </Text>
              <Text style={styles.infoFont}>{animal?.status}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.tipoInfo, styles.infoFont]}>Localização: </Text>
              <Text style={styles.infoFont}>{animal?.localizacao}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.tipoInfo, styles.infoFont]}>Data de Nascimento: </Text>
              <Text style={styles.infoFont}>{this.formatHourAndDate(animal?.dataNascimento)}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.tipoInfo, styles.infoFont]}>Entrada no Plantel: </Text>
              <Text style={styles.infoFont}>{this.formatDate(animal?.entradaPlantel)}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.tipoInfo, styles.infoFont]}>Peso de Compra: </Text>
              <Text style={styles.infoFont}>{animal?.pesoCompra}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.tipoInfo, styles.infoFont]}>Raça: </Text>
              <Text style={styles.infoFont}>{animal?.raca}</Text>
            </View>
            <View style={styles.separator}></View>
            <View>
              <Text style={[styles.tipoInfo, styles.infoFont]}>Código de Rastreamento: </Text>
              <Text style={styles.infoFont}>{animal?.codigoRastreamento}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerProfile: {
    marginTop: 20,
    marginLeft: 20,
  },
  containerTitle: {
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  containerBadge: {
    marginTop: 5,
    marginBottom: 10,
  },
  containerLinkEdit: {
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerEdit: {
    marginLeft: 10,
    flexDirection: 'row'
  },
  textEdit: {
    fontSize: 15
  },
  iconEdit: {
    marginLeft: 10,
    fontSize: 17
  },
  infoFont: {
    fontSize: 16
  },
  containerInfo: {
    marginTop: 8,
    flexDirection: 'row'
  },
  separator: {
    marginVertical: 15,
    marginRight: 20,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dcdcdc'
  },
  tipoInfo: {
    fontWeight: 'bold'
  }
});

export default AnimaProfile;
