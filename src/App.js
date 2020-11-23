/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from "./scenes/home";
import ArticleScreen from "./scenes/article";

const App: () => React$Node = () => {
  return (
    <ArticleScreen/>
  )

  return (
      <HomeScreen />
  );
};

export default App;
