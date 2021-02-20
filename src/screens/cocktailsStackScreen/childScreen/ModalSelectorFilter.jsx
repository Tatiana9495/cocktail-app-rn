import React from "react";
import { View, TextInput } from "react-native";
// import ModalSelector from "react-native-modal-selector";
import { connect } from "react-redux";

import { loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList } from "../../../redux/actions/categories";

const ModalSelectorFilter = ({ data, initValue, handleChange, placeholder, value }) => {
  // const [selectedIngredientValue, setSelectedIngredientValue] = useState("");
  // const [selectedCategoryValue, setSelectedCategoryValue] = useState("");
  // const [selectedGlassValue, setSelectedGlassValue] = useState("");

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
    <View style={{ flex: 1, justifyContent: 'space-around'}}>
      {/* <ModalSelector
        data={data}
        initValue={initValue}
        style={{
          borderRadius: 5,
          backgroundColor: "#CCCCFF",
          marginBottom: 20,
          marginTop: 9
        }}
        initValueTextStyle={{ color: "rgba(38, 38, 115, 0.5)" }}
        onChange={(option) => handleChange(option.label)}
      >
        <TextInput
          style={{ height: 38, paddingLeft: 14, paddingRight: 14, justifyContent: "center" }}
          editable={false}
          placeholder={placeholder}
          value={value}
        />
      </ModalSelector> */}
    </View>
  );
};

export default connect((state) => ({
  categories: state.categories.categoriesList,
  glassList: state.categories.glassList,
  ingredients: state.categories.ingredientsList,
  alcoholList: state.categories.alcoholList
}), { loadCategoriesList, loadGlassList, loadIngredientsList, loadAlcoholList })(ModalSelectorFilter);
