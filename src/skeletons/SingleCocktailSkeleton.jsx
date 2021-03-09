import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const SingleCocktailSkeleton = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.greyImg}></View>
      <View style={styles.drinkName}></View>
      <View style={styles.contentWrapper}>
        {
          Array(4).fill(0).map((index) => {
            return (
              <View key={Math.random()} style={styles.innerContent}>
                <View style={styles.leftColumn}></View>
                <View style={styles.rightColumn}></View>
              </View>
            )
          })
        }
      </View>
      <View style={styles.wrapperTitle}></View>
      <View style={styles.contentWrapper}>
        {
          Array(5).fill(0).map((index) => {
            return (
              <View
                key={Math.random()}
                style={styles.innerContent}
              >

                {/* <View style={styles.img}></View> */}
                <View style={styles.leftColumn}></View>
                <View style={styles.rightColumn}></View>
              </View>
            )
          })
        }
      </View>
      <View style={styles.wrapperTitle}></View>
      <View style={[styles.contentWrapper, styles.lastWrapper]}>
        <View style={[styles.item, styles.firstItem]}></View>
        <View style={styles.item}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00004D",
    flex: 1,
    paddingRight: 19,
    paddingLeft: 19,
    paddingTop: 30,
    paddingBottom: 170
  },
  greyImg: {
    height: 261,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "white"
  },
  drinkName: {
    width: 120,
    height: 26,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginBottom: 16
  },
  contentWrapper: {
    backgroundColor: "white",
    marginBottom: 13,
    borderRadius: 5,
    paddingTop: 14,
    paddingBottom: 9,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 5,
  },
  innerContent: {
    flex: 1,
    height: 16,
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center"
  },
  leftColumn: {
    width: 110,
    height: 16,
    marginRight: 20,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  wrapperTitle: {
    width: 82,
    height: 19,
    backgroundColor: "#ddd",
    marginBottom: 7,
    borderRadius: 5,
  },
  rightColumn: {
    flex: 1,
    height: 16,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  lastWrapper: {
    marginBottom: 50
  },
  img: {
    marginRight: 30,
    height: 90,
    width: 30,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  item: {
    height: 16,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  firstItem: {
    marginBottom: 5
  }
});

export default SingleCocktailSkeleton;
