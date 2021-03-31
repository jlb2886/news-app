import React, { useEffect, useState } from 'react';
import {Button, View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {mockdata} from "../../data/mockdata";
import SectionContainer from "../../components/atoms/SectionContainer";
import {Colors, Typography} from "../../styles";
import firestore from '@react-native-firebase/firestore';
import moment from "moment";
import { InAppBrowser } from 'react-native-inappbrowser-reborn'


// const cohortStartDate = "March 1st 2021, 12:00 am"
// For testing purposes:
const cohortStartDate = "February 10th 2021, 12:19:00 am"

const getDayID = () => {

  // What I want to do
  // If - the Cohort Start Date = Today's Date or After the Cohort Start Date
  // Then - I want to subtract (Today's Date - Cohort Start Date) =
  // Some Variable which should equal the Day ID Matching the Correct Article to Display
  // Display the correct article for that day under "Today's Read"
  // Display past articles, so articles up to the day id to have under "Previous Reads"

  console.log("moment information:")
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

  // Get the amount of days in between the start date and the current date
  // console.log("number of days between: " + moment("2021-01-05").fromNow())
  //
  // var dateofvisit = moment('{visit}', 'DD-MM-YYYY');
  // var today = moment();
  // today.diff(dateofvisit, 'days');

  return 5
}

const HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState([])
  const [featuredArticle, setFeaturedArticle] = useState({})

  function getArticles() {
      const subscriber = firestore()
        .collection("articles")
        .where("dayID", "<", getDayID())
        .orderBy("dayID", "asc")
        .get()
        .then(querySnapshot => {
          console.log('Total articles: ', querySnapshot.size);

          let articleTemp = []

          querySnapshot.forEach(documentSnapshot => {
            // console.log('Article ID: ', documentSnapshot.id, documentSnapshot.data());
            articleTemp.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            })
          });

          setArticles(articleTemp)
          console.log(articleTemp)

        });

      // Stop listening for updates when no longer required
      return () => subscriber();
  }

  useEffect(getArticles, [])

  console.log('Yeetttttt')

  if (moment().format('MMMM Do YYYY, h:mm:ss a') < cohortStartDate) //If Cohort start date is
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content"/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.headerContainer}>
            <Text style={styles.sectionTitle}>{"No Reads yet"}</Text>
          </View>
        </ScrollView>
      </View>
    )

  function onPressOpenLink() {
    InAppBrowser.isAvailable()
      .then(r => {
        const url = 'https://www.google.com'
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

        <Button
          onPress={onPressOpenLink}
          title="Open Link"
          style={{
            color: "#841584",
            backgroundColor: '#ac91ac',
            height: 24,
            width: 142,
          }}

          accessibilityLabel="Learn more about this purple button"
        />

        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>{"Today's Read"}</Text>
        </View>
        <SectionContainer title={featuredArticle.title}
                          date={featuredArticle.date} imageURL={featuredArticle.imageURL}
                          articleBody={featuredArticle.articleBody}/>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>{"Previous Reads"}</Text>
        </View>
        {articles && articles.map(article => {
          return <SectionContainer key={article.id} title={article.title} //For testing: (article.dayID + " | " + ) in front of article.title
                                   date={article.date}
                                   imageURL={article.imageURL} articleBody={article.articleBody}/>
        })}
      </ScrollView>
    </View>
  )

}
export default HomeScreen

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
    // textAlign: 'center',
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
