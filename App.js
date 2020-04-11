/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import AnimalList from './src/components/animal/AnimalList';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AnimalList />
    </>
  );
}

export default App;
