import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

class AnimaProfile extends Component {

  render() {
    const { animal } = this.props;

    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Galinha Pintadinha</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AnimaProfile;
