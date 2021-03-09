import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const FilterBottomBtn = ({ setOptionValue, submit, optionValue }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default FilterBottomBtn;
