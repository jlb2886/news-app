import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {mockdata} from "../../data/mockdata";
import SectionContainer from "../../components/atoms/SectionContainer";
import {Colors, Typography} from "../../styles";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>{"Today's Read"}</Text>
        </View>
        <SectionContainer title={mockdata[0].title} description={mockdata[0].description} date={mockdata[0].date} author={mockdata[0].author} image={mockdata[0].image} body={mockdata[0].body}/>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>{"Previous Reads"}</Text>
        </View>
        <SectionContainer title={mockdata[1].title} description={mockdata[1].description} date={mockdata[1].date} author={mockdata[1].author} image={mockdata[1].image} body={mockdata[1].body}/>
        <SectionContainer title={mockdata[2].title} description={mockdata[2].description} date={mockdata[2].date} author={mockdata[2].author} image={mockdata[2].image} body={mockdata[2].body}/>
      </ScrollView>
    </View>
  )

}
export default HomeScreen

// function setDates({mockdata}){
//   let todaysArticleIndex = () => {
//     return mockdata.map(dates => {
//       return(
//         console.log(dates.date)
//       )
//     })
//   }
//   return (todaysArticleIndex())
// }

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