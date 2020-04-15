/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import AnimalList from './src/components/animal/AnimalList';
import AnimalProfile from './src/components/animal/AnimalProfile';
import ProfileEdit from './src/components/animal/ProfileEdit';

export default function App() {
  return (
    <>
      <AppContainer />
    </>
  );
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: AnimalList,
    navigationOptions: {
      headerShown: false
    },
  },
  Profile: {
    screen: AnimalProfile,
    navigationOptions: {
      title: 'Perfil do Animal'
    },
  },
  ProfileEdit: {
    screen: ProfileEdit,
    navigationOptions: {
      title: 'Editar Perfil'
    },
  }
});

const AppContainer = createAppContainer(AppNavigator);