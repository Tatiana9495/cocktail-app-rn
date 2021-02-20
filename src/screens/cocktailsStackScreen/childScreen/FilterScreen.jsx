import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
// import ModalSelector from "react-native-modal-selector";
import { connect } from "react-redux";

import { loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList } from "../../../redux/actions/categories";
import { TextInput } from "react-native-gesture-handler";

const FilterScreen = ({ loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList, categories, glassList, ingredients, alcoholList }) => {
  // const [selectedIngredientValue, setSelectedIngredientValue] = useState("");
  // const [selectedCategoryValue, setSelectedCategoryValue] = useState("");
  // const [selectedGlassValue, setSelectedGlassValue] = useState("");
  const [selectedValue, setSelectedValue] = useState({ ingredient: "", category: "", type: "", glass: "" })

  useEffect(() => {
    loadCategoriesList()
    loadGlassList()
    loadIngredientsList()
    loadAlcoholList()
  }, [loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList])

  // let index = 0;
  // const dataIngredients = ingredients.map(item => (
  //   { key: index++, label: item.strIngredient1 }
  // ));

  // let i = 0;
  // const dataCategories = categories.map(item => (
  //   { key: i++, label: item.strCategory }
  // ));

  // let x = 0;
  // const dataGlass = glassList.map(item => (
  //   { key: x++, label: item.strGlass }
  // ));

  // const arrOfLists = [dataIngredients, dataCategories, dataGlass];

  return (
    <View style={styles.container}>
      {/* <ModalSelector
        data={dataIngredients}
        initValue="Select ingredient"
        style={{
          borderRadius: 5,
          backgroundColor: "#CCCCFF",
          marginBottom: 20
        }}
        initValueTextStyle={{ color: "rgba(38, 38, 115, 0.5)" }}
        onChange={(option) => { setSelectedValue({ ...selectedValue, ingredient: option.label }) }}
      >
        <TextInput
          style={{ height: 50, paddingLeft: 14, paddingRight: 14, justifyContent: "center" }}
          editable={false}
          placeholder="Select ingredient"
          value={selectedValue.ingredient}
        />
      </ModalSelector>
      <View style={styles.btnsContainer}>
        {
          alcoholList?.map(item => {
            return (
              <TouchableOpacity
                key={Math.random()}
                style={styles.btn}
                onPress={() => setSelectedValue({ ...selectedValue, type: item.strAlcoholic })}
              >
                <Text>{item.strAlcoholic}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <ModalSelector
        data={dataCategories}
        initValue="Select drink category"
        style={{
          borderRadius: 5,
          backgroundColor: "#CCCCFF",
          marginBottom: 20
        }}
        initValueTextStyle={{ color: "rgba(38, 38, 115, 0.5)" }}
        onChange={(option) => { setSelectedValue({ ...selectedValue, category: option.label }) }}
      >
        <TextInput
          style={{ height: 50, paddingLeft: 14, paddingRight: 14, justifyContent: "center" }}
          editable={false}
          placeholder="Select ingredient"
          value={selectedValue.category}
        />
      </ModalSelector>
      <ModalSelector
        data={dataGlass}
        initValue="Select drink category"
        style={{
          borderRadius: 5,
          backgroundColor: "#CCCCFF",
          marginBottom: 20
        }}
        initValueTextStyle={{ color: "rgba(38, 38, 115, 0.5)" }}
        onChange={(option) => { setSelectedValue({ ...selectedValue, glass: option.label }) }}
      >
        <TextInput
          style={{ height: 50, paddingLeft: 14, paddingRight: 14, justifyContent: "center" }}
          editable={false}
          placeholder="Select ingredient"
          value={selectedValue.glass}
        />
      </ModalSelector> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#00004D",
    backgroundColor: "#fff",
    paddingRight: 19,
    paddingLeft: 19,
    paddingTop: 30
  },
  picker: {
    // height: 50,
    borderRadius: 5,
    backgroundColor: "#CCCCFF",
    marginBottom: 20
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
    height: 28
  },
  btn: {
    height: 28,
    width: 60,
    justifyContent: "center",
    backgroundColor: "#000033",
    borderRadius: 5,
    borderColor: "#CCCCFF"
  }
});

export default connect((state) => ({
  categories: state.categories.categoriesList,
  glassList: state.categories.glassList,
  ingredients: state.categories.ingredientsList,
  alcoholList: state.categories.alcoholList
}), { loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList })(FilterScreen);
