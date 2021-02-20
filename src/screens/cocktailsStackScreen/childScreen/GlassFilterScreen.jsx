import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";

import { sortAlphabetically } from "../../../lib/sortFunc";
import { loadGlassList } from "../../../redux/actions/categories";

const IngredientFilterScreen = ({ loadGlassList, glassList }) => {
  const [optionValue, setOptionValue] = useState(null);

  useEffect(() => {
    loadGlassList();
  }, [loadGlassList]);

  const glassData = glassList?.map(item => item.strGlass);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          glassData.sort(sortAlphabetically).map(item => {
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
        <TouchableOpacity style={[styles.bottomBtn, styles.applyBtn]}>
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
  glassList: state.categories.glassList,
}), { loadGlassList })(IngredientFilterScreen);
