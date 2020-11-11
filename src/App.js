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
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from './styles'

const App: () => React$Node = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Today's broadcast</Text>
          <Text style={styles.replacerBox}></Text>
          <Text style={styles.sectionDescription}>
            Featuring a tutorial on how to make react native apps, Julianna Baker becomes new pro on the scene!
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Today's read</Text>
          <Text style={styles.replacerBox}></Text>
          <Text style={styles.sectionDescription}>
            Game of thrones to be "Re released" Get up to date on which characters are history and which will be making a comback.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

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
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '600',
    color: Colors.WHITE,
    fontFamily: 'PlayfairDisplay-SemiBold',
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
    fontSize: 18,
    fontWeight: '400',
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
