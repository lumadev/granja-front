import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import {API_URL} from '../../app.consts';

class AnimaProfile extends Component {
  state = {
    animal: null
  };

  componentDidMount() {
    const animalId = this.props.navigation.getParam('animalId');

    axios.get(`${API_URL}/animal/${animalId}`).then((res) => {
      const animal = res.data;
      this.setState({ animal });
    });
  }

  render() {
    const { animal } = this.props;

    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Galinha Pintadinha</Text>
          </View>
          <View>
            <Text>Badge</Text>
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
  }
});

export default AnimaProfile;
