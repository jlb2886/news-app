import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet, Pressable, Image} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Colors, Typography} from "../../styles";

const ArticleScreen = ({route, navigation}) => {
console.log(route.params)
  const {title, body, image, author, date} = route.params

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <Pressable onPress={() => navigation.goBack()}><Text style={styles.back}>Back</Text></Pressable>
        <Text style={styles.articleTitle}>{title}</Text>
        <Image
          style={styles.replacerBox}
          source={{
            uri: image,
          }}
        />
        <Text style={styles.articleBody}>{body}</Text>
        <Text style={styles.articleFooter}>Article Author: {author} </Text>
        <Text style={styles.articleFooter}>Released: {date}</Text>
        <Text style={styles.share}>Share</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ArticleScreen

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.BLACK,
    flex: 1,
  },
  articleTitle: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    color: Colors.WHITE,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  back: {
    color: Colors.WHITE,
    marginHorizontal: 20,
    marginTop: 20,
  },
  replacerBox: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 190,
    backgroundColor: Colors.PRIMARY,
  },
  articleBody: {
    marginTop: 8,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    lineHeight: 30,
    color: Colors.GRAY_LIGHT,
    marginHorizontal: 20,
  },
  articleFooter: {
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
    marginHorizontal: 20,
    marginTop: 20,
  },
  share: {
    ...Typography.FONT_BOLD,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
    marginHorizontal: 20,
    marginTop: 40,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.WHITE,
    borderRadius: 10,
    paddingVertical: 10,
  },
})