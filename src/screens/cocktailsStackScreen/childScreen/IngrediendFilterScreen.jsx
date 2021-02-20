import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";

import { sortAlphabetically } from "../../../lib/sortFunc";
import { loadIngredientsList } from "../../../redux/actions/categories";
import { setFilterIngredient } from "../../../redux/actions/filter";

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const IngredientFilterScreen = ({ loadIngredientsList, ingredients, setFilterIngredient, navigation }) => {
  const [optionValue, setOptionValue] = useState("");

  useEffect(() => {
    loadIngredientsList();
  }, [loadIngredientsList])

  const submit = (ingredient) => {
    setFilterIngredient(ingredient);
    navigation.navigate("Cocktails")
  };

  const ingredientData = ingredients?.map(item => item.strIngredient1);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          ingredientData?.sort(sortAlphabetically).map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.choice}
                onPress={() => setOptionValue(item)}
                key={Math.random()}
              >
                <Text style={[optionValue === item ? styles.boldText : "", styles.optionTitle]}>{item}</Text>
                {
                  optionValue === item &&
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="#CCCCFF"
                    size={26}
                  />
                }
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.bottomBtn, styles.resetBtn]}
          onPress={() => setOptionValue("")}
        >
          <Text style={[styles.btnText, styles.resetText]}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomBtn, styles.applyBtn]}
          onPress={() => submit(optionValue)}
        >
          <Text style={[styles.btnText, styles.applyText]}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00004D",
  },
  choice: {
    height: 42,
    flex: 1,
    flexDirection: "row",
    paddingLeft: 17,
    paddingRight: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
    justifyContent: "space-between",
    alignItems: "center"
  },
  optionTitle: {
    color: "#CCCCFF",
    fontSize: 14
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 11,
    marginTop: 11
  },
  bottomBtn: {
    width: "48%",
    height: 38,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  boldText: {
    fontWeight: "700"
  },
  resetBtn: {
    backgroundColor: "rgba(196, 196, 196, 0.6)"
  },
  applyBtn: {
    backgroundColor: "#CCCCFF"
  },
  resetText: {
    color: "#000",
  },
  applyText: {
    color: "#262673"
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700"
  }
});

export default connect((state) => ({
  ingredients: state.categories.ingredientsList,
}), { loadIngredientsList, setFilterIngredient })(IngredientFilterScreen);
