import React from "react";
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

const RandomCocktailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        activeOpacity={0.7}
        
      >
        <Text>Random cocktail</Text>
      </TouchableOpacity>
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
})

export default connect()(RandomCocktailScreen);