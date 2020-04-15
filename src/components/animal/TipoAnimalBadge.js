import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TipoAnimalBadge extends Component {

  render() {
    const { tipoAnimal } = this.props;

    return (
      <View style={styles.tipoAnimalBadge}>
        <Text style={styles.tipoAnimal}>{tipoAnimal}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default TipoAnimalBadge;
