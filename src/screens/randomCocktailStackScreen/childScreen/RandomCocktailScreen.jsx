import React from "react";
import { ScrollView, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import { loadRandomCocktail, loadSingleCocktail } from "../../../redux/actions/cocktails";

const RandomCocktailScreen = ({ loadRandomCocktail, randomCocktail, loadSingleCocktail, navigation }) => {

  const submit = (num) => {
    loadSingleCocktail(num);
    navigation.navigate("Cocktail");
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => loadRandomCocktail()}
      >
        <Text style={styles.btnText}>Random cocktail</Text>
      </TouchableOpacity>
      {
        Object.keys(randomCocktail).length > 0 &&
        <TouchableOpacity
          style={styles.cocktailCard}
          key={Math.random()}
          activeOpacity={0.7}
          id={randomCocktail.idDrink}
          onPress={() => submit(Number(randomCocktail.idDrink))}
        >
          <Image
            source={{ uri: `${randomCocktail.strDrinkThumb}/preview` }}
            style={styles.cocktailImg}
          />
          <Text style={styles.cocktailName}>{randomCocktail.strDrink}</Text>
        </TouchableOpacity>
      }
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
  btn: {
    height: 35,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCCCFF",
    borderRadius: 5,
    marginBottom: 30
  },
  btnText: {
    color: "#262673",
    fontSize: 14,
    fontWeight: "700"
  },
  cocktailCard: {
    height: 305,
    width: 285,
    backgroundColor: "#000033",
    borderRadius: 5,
    marginBottom: 15,
    // paddingLeft: 15,
    // paddingRight: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  cocktailImg: {
    marginBottom: 15,
    width: 213,
    height: 195,
    borderRadius: 3
  },
  cocktailName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#CCCCFF"
  },
});

export default connect((state) => ({
  randomCocktail: state.randomCocktail
}), { loadRandomCocktail, loadSingleCocktail })(RandomCocktailScreen);
