import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";

import { sortAlphabetically } from "../../../lib/sortFunc";
import { loadAlcoholList } from "../../../redux/actions/categories";
import { setFilterType } from "../../../redux/actions/filter";
import FilterBottomBtn from "../../shared/FilterBottomBtn";
import FilterSkeleton from "../../../skeletons/FilterSkeleton";

const IngredientFilterScreen = ({ loadAlcoholList, alcoholList, setFilterType, navigation, isLoadingFilter }) => {
  const [optionValue, setOptionValue] = useState("");

  useEffect(() => {
    loadAlcoholList();
  }, [loadAlcoholList]);

  const submit = (type) => {
    setFilterType(type);
    navigation.navigate("Cocktails");
  };

  const alcoholData = alcoholList?.map(item => item.strAlcoholic);

  return (
    <View style={styles.container}>
      {
        isLoadingFilter ?
          <FilterSkeleton /> :
          <ScrollView>
            {
              alcoholData?.sort(sortAlphabetically).map(item => {
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
        optionValue !== "" &&
        <FilterBottomBtn
          setOptionValue={setOptionValue}
          submit={submit}
          optionValue={optionValue}
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
  alcoholList: state.categories.alcoholList,
  isLoadingFilter: state.filter.isLoadingFilter,
}), { loadAlcoholList, setFilterType })(IngredientFilterScreen);
