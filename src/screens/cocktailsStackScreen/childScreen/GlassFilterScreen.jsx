import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";

import { sortAlphabetically } from "../../../lib/sortFunc";
import { loadGlassList } from "../../../redux/actions/categories";
import { setFilterGlass } from "../../../redux/actions/filter";
import FilterBottomBtn from "../../shared/FilterBottomBtn";
import FilterSkeleton from "../../../skeletons/FilterSkeleton";

const IngredientFilterScreen = ({ loadGlassList, glassList, setFilterGlass, navigation, isLoadingFilter }) => {
  const [optionValue, setOptionValue] = useState(null);

  useEffect(() => {
    loadGlassList();
  }, [loadGlassList]);

  const submit = (glass) => {
    setFilterGlass(glass);
    navigation.navigate("Cocktails")
  };

  const glassData = glassList?.map(item => item.strGlass);

  return (
    <View style={styles.container}>
      {
        isLoadingFilter ?
          <FilterSkeleton /> :
          <ScrollView>
            {
              glassData?.sort(sortAlphabetically).map(item => {
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
  glassList: state.categories.glassList,
  isLoadingFilter: state.filter.isLoadingFilter,
}), { loadGlassList, setFilterGlass })(IngredientFilterScreen);
