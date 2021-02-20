import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import { connect } from "react-redux";

const IngredientScreen = ({ singleIngredient }) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://www.thecocktaildb.com/images/ingredients/${singleIngredient.strIngredient}.png` }}
        style={styles.ingredientImg}
      />
      <Text style={styles.ingredientName}>{singleIngredient.strIngredient}</Text>
      {
        singleIngredient.strType &&
        <>
          <View style={styles.contentWrapper}>
            <Text style={styles.boldText}>Type</Text>
            <Text>{singleIngredient.strType}</Text>
          </View>
        </>
      }
      {
        singleIngredient.strDescription &&
        <>
          <Text style={styles.wrapperTitle}>Description</Text>
          <View style={[styles.contentWrapper, styles.lastWrapper]}>
            <Text>{singleIngredient.strDescription}</Text>
          </View>
        </>
      }
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00004D",
    flex: 1,
    paddingRight: 19,
    paddingLeft: 19,
    paddingTop: 30,
    paddingBottom: 50
  },
  ingredientImg: {
    height: 261,
    borderRadius: 5,
    marginBottom: 10
  },
  ingredientName: {
    fontWeight: "900",
    fontSize: 22,
    color: "#CCCCFF",
    marginBottom: 16
  },
  contentWrapper: {
    backgroundColor: "#CCCCFF",
    marginBottom: 13,
    borderRadius: 5,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 17,
    paddingRight: 17,
    flexDirection: "row"
  },
  boldText: {
    fontWeight: "700",
    width: 110,
    marginRight: 20
  },
  wrapperTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: "#CCCCFF",
    marginBottom: 7
  },
  lastWrapper: {
    marginBottom: 50
  }
})

export default connect((state) => ({
  singleIngredient: state.singleIngredient
}))(IngredientScreen);
