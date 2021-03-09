import React from "react";
import { View, StyleSheet } from "react-native";

const FilterSkeleton = () => {

  return (
    <View style={styles.container}>
      <View>
        {
          Array(9).fill(0).map(item => {
            return (
              <View style={styles.choice}>
                <View style={styles.innerChoice}></View>
              </View>
            )
          })
        }
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.bottomBtn}>
          <View style={styles.btnText}></View>
        </View>
        <View style={styles.bottomBtn}>
          <View style={styles.btnText}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00004D",
    paddingBottom: 100
  },
  choice: {
    height: 42,
    flexDirection: "row",
    paddingLeft: 17,
    paddingRight: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
    justifyContent: "space-between",
    alignItems: "center"
  },
  innerChoice: {
    backgroundColor: "rgba(221, 221, 221, 0.8)",
    width: 116,
    height: 16,
    borderRadius: 5
  },
  btnContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 17,
    paddingRight: 17,
    paddingLeft: 17
  },
  bottomBtn: {
    backgroundColor: "rgba(221, 221, 221, 0.7)",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    borderRadius: 5
  },
  btnText: {
    borderRadius: 5,
    backgroundColor: "rgba(221, 221, 221, 0.8)",
    width: 86,
    height: 16
  }
});

export default FilterSkeleton;
