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

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.BLACK,
    flex: 1,
  },
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    color: Colors.WHITE,
  },
  headerContainer: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    paddingHorizontal: 24,
    paddingVertical: 20,
    color: Colors.WHITE,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
    marginHorizontal: 20,
  },
  articleTitle: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    color: Colors.WHITE,
    marginBottom: 15,
  },
  authorDateStyle: {
    marginTop: 8,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT,
  },
  replacerBox: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 190,
    backgroundColor: Colors.PRIMARY,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT,
  },
  highlight: {
    fontWeight: '700',
  },
  colorBold: {
    fontWeight: '900',
    color: 'green',
  },
  footer: {
    color: Colors.GRAY_LIGHT,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
