import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";

import { sortAlphabetically } from "../../../lib/sortFunc";
import { loadCategoriesList } from "../../../redux/actions/categories";
import { setFilterCategory } from "../../../redux/actions/filter";
import FilterBottomBtn from "../../shared/FilterBottomBtn";
import FilterSkeleton from "../../../skeletons/FilterSkeleton";

const IngredientFilterScreen = ({ loadCategoriesList, categories, setFilterCategory, navigation, isLoadingFilter }) => {
  const [optionValue, setOptionValue] = useState(null);

  useEffect(() => {
    loadCategoriesList();
  }, [loadCategoriesList]);

  const submit = (category) => {
    setFilterCategory(category);
    navigation.navigate("Cocktails")
  };

  const categoryData = categories?.map(item => item.strCategory);

  return (
    <View style={styles.container}>
      {
        isLoadingFilter ?
        <FilterSkeleton /> :
        <ScrollView>
        {
          categoryData?.sort(sortAlphabetically).map(item => {
            return (
              item !== "" &&
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
                    icon={faGlassMartiniAlt}
                    color="#CCCCFF"
                    size={20}
                  />
                }
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
}
      {
        optionValue !== null &&
        <FilterBottomBtn
          setOptionValue={setOptionValue}
          optionValue={optionValue}
          submit={submit}
        />
      }
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
  }
});

export default connect((state) => ({
  categories: state.categories.categoriesList,
  isLoadingFilter: state.filter.isLoadingFilter,
}), { loadCategoriesList, setFilterCategory })(IngredientFilterScreen);
