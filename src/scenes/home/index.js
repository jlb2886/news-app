import React, { useEffect, useState } from 'react';
import {Button, View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {Colors, Typography} from "../../styles";
import { InAppBrowser } from 'react-native-inappbrowser-reborn'

const HomeScreen = ({navigation}) => {

  function onPressOpenLink() {
    InAppBrowser.isAvailable()
      .then(r => {
        // *** Link To Be Changed ***
        const url = 'http://news.brickwallcyber.com/'
        // ***
        const options = {
          forceCloseOnRedirection: true,
        }

        InAppBrowser.open(url, options)
          .then(r => {
            console.log("OnPressOpenLink Result(r): ", r)
          })
          .catch(error => {
            console.log(error.message)
          })

      })
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content"/>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>

        <View style={styles.headerContainer}>
          {/***Change the "News" to anything (What you want your title to be)***/}
          <Text style={styles.sectionTitle}>{"News"}</Text>
          {/*****/}
        </View>

        <View style={styles.headerContainer}>
          <View style={styles.styleLines}/>
          <Text style={styles.articleTitle}>{"Login"}</Text>
          <View style={styles.styleLines}/>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>{"Login to Brick Wall Cyber to access your account and information for your cohort."}</Text>
        </View>

        <View style={styles.button}>
          <Button
            onPress={onPressOpenLink}
            title="Brick Wall Cyber Login"
            // ***Change this color to suit your color pallet***
            color= "#DFE0F1"
            // ***
          />
        </View>

      </ScrollView>
    </View>
  )

}
export default HomeScreen

// *** Edit the styles here ***
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
  button: {
    backgroundColor: Colors.PRIMARY,
    marginTop: 70,
    borderRadius: 50,
    marginHorizontal: 60,
    marginVertical: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  styleLines: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.PRIMARY,
    marginTop: 20,
    marginHorizontal: 5,
    height: 2,
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_64,
    color: Colors.WHITE,
    textAlign: 'center',
  },
  headerContainer: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    paddingHorizontal: 24,
    paddingVertical: 20,
    color: Colors.WHITE,
    marginBottom: 15,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  articleTitle: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    color: Colors.WHITE,
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
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
    // textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_24,
    color: Colors.GRAY_DARK,
    marginBottom: 15,
    marginHorizontal: 20,
    textAlign: 'center',
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
