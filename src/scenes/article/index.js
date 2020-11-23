import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

const ArticleScreen = ({route}) => {

  const {title, description} = route.params

  return (
    <SafeAreaView>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </SafeAreaView>
  )
}

export default ArticleScreen