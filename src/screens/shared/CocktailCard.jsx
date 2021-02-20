import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const CocktailCard = ({ submit, itemId, itemImg, itemName }) => {
  return (
    <TouchableOpacity
      style={styles.cocktailCard}
      activeOpacity={0.7}
      id={itemId}
      onPress={() => submit(Number(itemId))}
    >
      <Image
        source={{ uri: `${itemImg}/preview` }}
        style={styles.cocktailImg}
      />
      <Text
        style={styles.cocktailName}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {itemName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cocktailCard: {
    backgroundColor: "#000033",
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center"
  },
  cocktailImg: {
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 3
  },
  cocktailName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#CCCCFF"
  },
})

export default CocktailCard;
