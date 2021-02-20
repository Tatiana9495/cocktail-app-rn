import React, { useState } from "react";
import { ScrollView, View, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { loadCocktailByName, loadSingleCocktail } from "../../../redux/actions/cocktails";
import { loadSingleIngredient } from "../../../redux/actions/singleIngredient";
import CocktailCard from "../../shared/CocktailCard";

const SearchCocktailScreen = ({ loadCocktailByName, cocktailByName, loadSingleCocktail, navigation, loadSingleIngredient }) => {
  const [inputValue, setInputValue] = useState("");
  const [ingredientValue, setIngredientValue] = useState("");

  const submit = (id) => {
    loadSingleCocktail(id);
    navigation.navigate("Cocktail");
  };

  const submitIngredient = (name) => {
    navigation.navigate("Ingredient");
    loadSingleIngredient(name);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for cocktail"
          style={styles.searchInput}
          onChangeText={text => setInputValue(text)}
          onSubmitEditing={() => loadCocktailByName(inputValue)}
          value={inputValue}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for ingredient"
          style={styles.searchInput}
          onChangeText={text => setIngredientValue(text)}
          onSubmitEditing={() => submitIngredient(ingredientValue)}
          value={ingredientValue}
        />
      </View>
      <View style={styles.cardsContainer}>
        {
          cocktailByName?.map(item => {
            return (
              <View key={Math.random()} style={styles.column}>
                <CocktailCard
                  submit={submit}
                  itemId={item.idDrink}
                  itemImg={item.strDrinkThumb}
                  itemName={item.strDrink}
                />
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17
  },
  searchInput: {
    flex: 1,
    borderRadius: 5,
    height: 38,
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: "#CCCCFF",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  cocktailCard: {
    // height: 157,
    backgroundColor: "#000033",
    width: "48%",
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center"
  },
  cocktailImg: {
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 3
  },
  cocktailName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#CCCCFF"
  },
  column: {
    width: "48%"
  }
})

export default connect((state) => ({
  cocktailByName: state.cocktailByName
}), { loadCocktailByName, loadSingleCocktail, loadSingleIngredient })(SearchCocktailScreen);