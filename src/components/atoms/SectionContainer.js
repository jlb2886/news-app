import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Colors, Typography} from "../../styles";
import {useNavigation} from "@react-navigation/native";

function SectionContainer ({title, imageURL, date, articleBody}){
  const navigation = useNavigation()

  const handlePress = () => {
    console.log('handlePress was triggered')
    navigation.navigate('Article', {title, imageURL, date, articleBody})
  }

  return (
    <Pressable style={styles.sectionContainer} onPress={handlePress}>
      <Text style={styles.articleTitle}>{title}</Text>
      <Text style={styles.authorDateStyle}>Released: {date}</Text>
      <Image
        style={styles.replacerBox}
        source={{
          uri: imageURL,
        }}
      />
      <Text style={styles.readMore}>Read More</Text>
    </Pressable>
  )
}

export default SectionContainer

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.BLACK,
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 20,
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
  readMore: {
    marginTop: 8,
    ...Typography.FONT_BOLD,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT,
  },
  replacerBox: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 190,
    backgroundColor: Colors.PRIMARY,
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
