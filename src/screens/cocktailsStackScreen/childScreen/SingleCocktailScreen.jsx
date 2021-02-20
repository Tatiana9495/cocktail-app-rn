import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import { connect } from "react-redux";

import { loadSingleIngredient } from "../../../redux/actions/singleIngredient";
import SingleCocktailSkeleton from "../../../skeletons/SingleCocktailSkeleton";

const data = ["Glass", "Category", "Type", "IBA Category"];

const SingleCocktailScreen = ({ singleCocktail, navigation, loadSingleIngredient, isLoadingCocktail }) => {
  const cocktailData = {
    "Glass": singleCocktail[0].strGlass,
    "Category": singleCocktail[0].strCategory,
    "Type": singleCocktail[0].strAlcoholic,
    "IBA Category": (singleCocktail[0].strIBA ? singleCocktail[0].strIBA : "-")
  }

  const ingredientData = [
    [singleCocktail[0].strIngredient1, singleCocktail[0].strMeasure1],
    [singleCocktail[0].strIngredient2, singleCocktail[0].strMeasure2],
    [singleCocktail[0].strIngredient3, singleCocktail[0].strMeasure3],
    [singleCocktail[0].strIngredient4, singleCocktail[0].strMeasure4],
    [singleCocktail[0].strIngredient5, singleCocktail[0].strMeasure5],
    [singleCocktail[0].strIngredient6, singleCocktail[0].strMeasure6],
    [singleCocktail[0].strIngredient7, singleCocktail[0].strMeasure7],
    [singleCocktail[0].strIngredient8, singleCocktail[0].strMeasure8],
    [singleCocktail[0].strIngredient9, singleCocktail[0].strMeasure9],
    [singleCocktail[0].strIngredient10, singleCocktail[0].strMeasure10],
    [singleCocktail[0].strIngredient11, singleCocktail[0].strMeasure11],
    [singleCocktail[0].strIngredient12, singleCocktail[0].strMeasure12],
    [singleCocktail[0].strIngredient13, singleCocktail[0].strMeasure13],
    [singleCocktail[0].strIngredient14, singleCocktail[0].strMeasure14],
    [singleCocktail[0].strIngredient15, singleCocktail[0].strMeasure15],
  ];

  const submit = (name) => {
    navigation.navigate("Ingredient");
    loadSingleIngredient(name)
  };

  useEffect(() => {
    console.log("aaaaaa", ingredientData)
  }, [ingredientData]);

  return (
    <>
      {
        isLoadingCocktail ?
          <SingleCocktailSkeleton /> :
          <ScrollView style={styles.container}>
            {
              isLoadingCocktail ?
                <View style={styles.greyImg}></View> :
                <Image
                  source={{ uri: singleCocktail?.[0]?.strDrinkThumb }}
                  style={styles.drinkImage}
                />
            }
            <Text style={styles.drinkName}>{singleCocktail[0].strDrink}</Text>
            <View style={styles.contentWrapper}>
              {
                Object.entries(cocktailData).map((item, index) => {
                  return (
                    <View key={Math.random()} style={styles.innerContent}>
                      <Text style={[styles.leftColumn, styles.boldText]}>{item[0]}</Text>
                      <Text style={styles.rightColumn}>{item[1]}</Text>
                    </View>
                  )
                })
              }
            </View>
            <Text style={styles.wrapperTitle}>Ingredients</Text>
            <View style={styles.contentWrapper}>
              {
                ingredientData.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={Math.random()}
                      style={styles.innerContent}
                      onPress={() => submit(item[0])}
                      activeOpacity={0.7}
                    >
                      {
                        item[0]?.length > 0 &&
                        <>
                          <Image source={{ uri: `https://www.thecocktaildb.com/images/ingredients/${item[0]}.png` }} style={styles.img} />
                          <Text style={[styles.leftColumn, styles.boldText]}>{item[0]}</Text>
                        </>
                      }
                      {
                        item[1]?.length > 0 &&
                        <>
                          <Text style={styles.rightColumn}>{item[1]}</Text>
                        </>
                      }
                    </TouchableOpacity>
                  )
                })
              }
            </View>
            <Text style={styles.wrapperTitle}>Instructions</Text>
            <View style={[styles.contentWrapper, styles.lastWrapper]}>
              <Text>{singleCocktail[0].strInstructions}</Text>
            </View>
          </ScrollView>
      }
    </>
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
  drinkImage: {
    height: 261,
    borderRadius: 5,
    marginBottom: 10
  },
  greyImg: {
    height: 261,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#C4C4C4"
  },
  drinkName: {
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
    paddingBottom: 9,
    paddingLeft: 17,
    paddingRight: 17,
    // flexDirection: "row"
  },
  innerContent: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center"
  },
  boldText: {
    fontWeight: "700"
  },
  leftColumn: {
    width: 110,
    marginRight: 20
  },
  wrapperTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: "#CCCCFF",
    marginBottom: 7
  },
  rightColumn: {
    flex: 1
  },
  lastWrapper: {
    marginBottom: 50
  },
  img: {
    marginRight: 30,
    height: 90,
    width: 30
  }
});

export default connect((state) => ({
  singleCocktail: state.singleCocktail.data,
  isLoadingCocktail: state.singleCocktail.isLoadingCocktail
}), { loadSingleIngredient })(SingleCocktailScreen);
