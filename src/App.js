/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {Colors, Typography} from './styles'
import {mockdata} from "./data/mockdata";
import {styles} from "./styles/styles.js"

const App: () => React$Node = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>{"Today's Read"}</Text>
        </View>
        <SectionContainer title={mockdata[0].title} description={mockdata[0].description} date={mockdata[0].date} author={mockdata[0].author} image={mockdata[0].image}/>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>{"Previous Reads"}</Text>
        </View>
        <SectionContainer title={mockdata[0].title} description={mockdata[0].description} date={mockdata[0].date} author={mockdata[0].author} image={mockdata[0].image}/>
        <SectionContainer title={mockdata[0].title} description={mockdata[0].description} date={mockdata[0].date} author={mockdata[0].author} image={mockdata[0].image}/>
      </ScrollView>
    </View>
  );
};

function SectionContainer (title, description, image, date, author){

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.articleTitle}>{mockdata[0].title}</Text>
      <Text style={styles.authorDateStyle}>Author: {mockdata[0].author}</Text>
      <Text style={styles.authorDateStyle}>Released: {mockdata[0].date}</Text>
      <Image
        style={styles.replacerBox}
        source={{
          uri: mockdata[0].image,
        }}
      />
      <Text style={styles.sectionDescription}>{mockdata[0].description}</Text>
    </View>
  )
}

export default App;
