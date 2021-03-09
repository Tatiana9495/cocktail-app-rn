import React from "react";
import renderer from "react-test-renderer";

import CocktailCard from "../screens/shared/CocktailCard";

test("renders cocktailcard", () => {
  const tree = renderer.create(<CocktailCard />).toJSON();
  expect(tree).toMatchSnapshot();
});