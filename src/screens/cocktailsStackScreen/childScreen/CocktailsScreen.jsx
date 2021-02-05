import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";

import { loadCocktailsList, loadSingleCocktail } from "../../../redux/actions/cocktails";
import { loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList } from "../../../redux/actions/categories";
import { loadSingleIngredient } from "../../../redux/actions/singleIngredient";

const CocktailsScreen = ({ ingredients, loadCocktailsList, loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList, cocktails, navigation, loadSingleCocktail, singleCocktail, loadSingleIngredient }) => {
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    loadCocktailsList()
  }, [loadCocktailsList]);

  useEffect(() => {
    loadCategoriesList()
    loadGlassList()
    loadIngredientsList()
    loadAlcoholList()
    loadSingleCocktail(11007)
    loadSingleIngredient("vodka")
  }, [loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList, loadSingleCocktail, loadSingleIngredient])

  const cocktailData = singleCocktail.length > 0 && {"Glass": singleCocktail[0].strGlass, "Category": singleCocktail[0].strCategory, "Type": singleCocktail[0].strAlcoholic, "IBA Category": singleCocktail[0].strIBA}

  useEffect(() => {
    if (singleCocktail.length > 0)
      console.log(Object.entries(cocktailData))
  }, [cocktailData])

  const submit = (id) => {
    loadSingleCocktail(id);
    navigation.navigate("Cocktail")
  };

  console.log(singleCocktail.length > 0 && `https://www.thecocktaildb.com/images/ingredients/${singleCocktail[0].strIngredient1}.png`)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for cocktail"
          style={styles.searchInput}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Filter")}
          activeOpacity={0.7}>
          <FontAwesomeIcon
            icon={faFilter}
            color="#CCCCFF"
            size={26}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {
          cocktails.map(item => {
            return (
              <TouchableOpacity
                style={styles.cocktailCard}
                key={Math.random()}
                activeOpacity={0.7}
                id={item.idDrink}
                onPress={() => submit(Number(item.idDrink))}
              >
                <Image
                  source={{ uri: `${item.strDrinkThumb}/preview` }}
                  style={styles.cocktailImg}
                />
                <Text style={styles.cocktailName}>{item.strDrink}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      {/* <View>
        {
         ingredients?.map(item => (
            <Text>{item.strIngredient1}</Text>
          ))
        }
      </View> */}
      <TouchableOpacity
        style={styles.showMoreBtn}
        activeOpacity={0.7}
      >
        <Text style={styles.btnText}>Show more</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00004D",
    paddingLeft: 19,
    paddingRight: 19,
    paddingBottom: 14,
    paddingTop: 19
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    borderRadius: 5,
    height: 38,
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: "#CCCCFF",
    marginRight: 15
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 30,
  },
  cocktailCard: {
    height: 157,
    backgroundColor: "#000033",
    width: "48%",
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
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
  showMoreBtn: {
    height: 38,
    borderRadius: 5,
    backgroundColor: "#CCCCFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 34
  },
  btnText: {
    color: "#262673",
    fontSize: 14,
    fontWeight: "700"
  }
});

export default connect((state) => ({
  cocktails: state.cocktails,
  ingredients: state.categories.ingredientsList,
  singleCocktail: state.singleCocktail
}), { loadCocktailsList, loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList, loadSingleCocktail, loadSingleIngredient })(CocktailsScreen);
