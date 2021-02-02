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
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={"Home"} component={HomeScreen}/>
        <Stack.Screen name={"Article"} component={ArticleScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
