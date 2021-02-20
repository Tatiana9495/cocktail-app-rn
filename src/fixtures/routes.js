export default {
  cocktails: {
    getList: (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
    getSingle: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    getRandom: () => "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    getCocktailByName: (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  },
  categories: {
    getCategoriesList: () => "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    getGlassList: () => "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
    getIngredientsList: () => "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
    getAlcoholList: () => "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list",
    filter: (category) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
  },
  ingredients: {
    getSingle: (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`,
    filter: (ingredient) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  },
  types: {
    filter: (type) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`
  },
  glasses: {
    filter: (glass) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`
  }
};
