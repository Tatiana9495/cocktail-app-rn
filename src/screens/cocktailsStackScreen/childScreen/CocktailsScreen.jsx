import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import { loadCocktailsList, loadSingleCocktail } from "../../../redux/actions/cocktails";
import { loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList } from "../../../redux/actions/categories";
import { setFilterIngredient } from "../../../redux/actions/filter";
import CocktailCard from "../../shared/CocktailCard";
import ModalSelectorFilter from "./ModalSelectorFilter";

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const btnsData = [
  {
    id: 1,
    title: "Ingredient",
    navigation: "Select ingredient"
  },
  {
    id: 2,
    title: "Type",
    navigation: "Select type"
  },
  {
    id: 3,
    title: "Category",
    navigation: "Select category"
  },
  {
    id: 4,
    title: "Glass",
    navigation: "Select glass"
  }
];

const CocktailsScreen = ({ loadCocktailsList, cocktails, navigation, loadSingleCocktail,
  singleCocktail, categories, glassList, ingredients, alcoholList, filterByIngredient, filterByType, filterByCategory, filterByGlass }) => {
  const [activeLetter, setActiveLetter] = useState("a");
  const [maxValue, setMaxValue] = useState(6);

  useEffect(() => {
    loadCocktailsList(activeLetter)
  }, [loadCocktailsList, activeLetter]);

  const cocktailData = singleCocktail.length > 0 &&
  {
    "Glass": singleCocktail[0].strGlass,
    "Category": singleCocktail[0].strCategory,
    "Type": singleCocktail[0].strAlcoholic,
    "IBA Category": singleCocktail[0].strIBA
  }

  useEffect(() => {
    if (singleCocktail.length > 0)
      console.log(Object.entries(cocktailData))
  }, [cocktailData]);

  const submit = (id) => {
    loadSingleCocktail(id);
    navigation.navigate("Cocktail");
  };

  const submitLetter = (name) => {
    setActiveLetter(name);
    setMaxValue(6);
  };

  // let index = 0;
  // const dataIngredients = ingredients?.map(item => (
  //   { key: index++, label: item.strIngredient1 }
  // ));

  // let i = 0;
  // const dataCategories = categories?.map(item => (
  //   { key: i++, label: item.strCategory }
  // ));

  // let y = 0;
  // const dataAlcohol = alcoholList?.map(item => (
  //   { key: y++, label: item.strAlcoholic }
  // ));

  // let x = 0;
  // const dataGlass = glassList?.map(item => (
  //   { key: x++, label: item.strGlass }
  // ));

  // const arrOfLists = [dataIngredients, dataCategories, dataGlass];

  const resultArray = () => {
    if (filterByIngredient.length > 0) return filterByIngredient;
    else if (filterByType.length > 0) return filterByType;
    else if (filterByCategory.length > 0) return filterByCategory;
    else if (filterByGlass.length > 0) return filterByGlass;
    else return cocktails;
  };

  const resultEquality = () => {
    if (filterByIngredient.length > 0) return maxValue < filterByIngredient.length;
    else if (filterByType.length > 0) return maxValue < filterByType.length;
    else if (filterByCategory.length > 0) return maxValue < filterByCategory.length;
    else if (filterByGlass.length > 0) return maxValue < filterByGlass.length;
    else return maxValue < cocktails.length;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Filter")}
          activeOpacity={0.7}
        >
          <Text style={styles.wrapperTitle}>Filter by</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterBtnContainer}>
        {/* <ModalSelectorFilter 
          data={dataCategories}
          initValue="Ingredient"
          handleChange={setIngredientValue}
          placeholder="Ingredient"
          value={ingredientValue}
        />
        <ModalSelectorFilter 
          data={dataIngredients}
          initValue="Category"
          handleChange={setCategoryValue}
          placeholder="Category"
          value={categoryValue}
        />
         <ModalSelectorFilter 
          data={dataIngredients}
          initValue="Glass type"
          handleChange={setGlassValue}
          placeholder="Glass type"
          value={glassValue}
        />
        <ModalSelectorFilter 
          data={dataAlcohol}
          initValue="Alcohol type"
          handleChange={setAlcoholValue}
          placeholder="Alcohol type"
          value={alcoholValue}
        /> */}
        {
          btnsData.map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={Math.random()}
                style={styles.filterBtn}
                onPress={() => navigation.navigate(item.navigation)}
              >
                <Text style={styles.filterTitle}>{item.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      {
        filterByIngredient.length === 0 &&
        filterByType.length === 0 &&
        filterByCategory.length === 0 &&
        filterByGlass.length === 0 &&
        <ScrollView
          horizontal={true}
          style={styles.letterList}
        >
          {
            alphabet.map(item => (
              <TouchableOpacity
                key={Math.random()}
                style={styles.letter}
                onPress={() => submitLetter(item)}
              >
                <Text
                  style={[activeLetter.toLowerCase() === item.toLowerCase() ? styles.underline : styles.noDecor, styles.letterText]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      }
      <View style={styles.cardsContainer}>
        {
          resultArray().map(item => {
            return (
              <View
                key={Math.random()}
                style={styles.column}
              >
                <CocktailCard
                  submit={submit}
                  itemId={item.idDrink}
                  itemImg={item.strDrinkThumb}
                  itemName={item.strDrink}
                />
              </View>
            )
          }).slice(0, maxValue)
        }
      </View>
      {
        resultEquality() &&
        <TouchableOpacity
          style={styles.showMoreBtn}
          activeOpacity={0.7}
          onPress={() => setMaxValue(maxValue + 8)}
        >
          <Text style={styles.btnText}>Show more</Text>
        </TouchableOpacity>
      }
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
  wrapperTitle: {
    color: "#CCCCFF",
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "700"
  },
  filterBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  filterBtn: {
    width: "48%",
    height: 35,
    backgroundColor: "#CCCCFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11
  },
  filterTitle: {
    color: "#262673",
    fontWeight: "700"
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  letterList: {
    marginTop: 15,
  },
  letter: {
    marginRight: 14
  },
  letterText: {
    color: "#CCCCFF",
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase"
  },
  underline: {
    textDecorationLine: "underline"
  },
  noDecor: {
    textDecorationLine: "none"
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
    marginTop: 15,
  },
  column: {
    width: "48%"
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
  singleCocktail: state.singleCocktail,
  categories: state.categories.categoriesList,
  glassList: state.categories.glassList,
  ingredients: state.categories.ingredientsList,
  alcoholList: state.categories.alcoholList,
  filterByIngredient: state.filter.filters.ingredient,
  filterByType: state.filter.filters.type,
  filterByCategory: state.filter.filters.category,
  filterByGlass: state.filter.filters.glass
}), { loadCocktailsList, loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList, loadSingleCocktail, setFilterIngredient })(CocktailsScreen);
