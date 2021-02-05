export default {
    cocktails: {
        // getListA: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
        // getListB: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b",
        // getListC: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c",
        // getListD: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d",
        // getListE: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e",
        // getListF: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f",
        // getListG: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g",
        // getListH: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h",
        // getListI: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i",
        // getListJ: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j",
        // getListK: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k",
        // getListL: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l",
        // getListM: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m",
        // getListN: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n",
        // getListO: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o",
        // getListP: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p",
        // getListQ: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q",
        // getListR: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r",
        // getListS: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s",
        // getListT: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t",
        // getListU: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=u",
        // getListV: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v",
        // getListW: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w",
        // getListX: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=x",
        // getListY: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y",
        // getListZ: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z",
        getList: () => "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b",
        getSingle: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        getRandom: () => "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    },
    categories: {
        getCategoriesList: () => "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
        getGlassList: () => "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
        getIngredientsList: () => "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
        getAlcoholList: () => "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
    },
    ingredients: {
        getSingle: (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
    }
}