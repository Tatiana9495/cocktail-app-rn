import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCocktail, faSearch, faRandom } from '@fortawesome/free-solid-svg-icons';

import CocktailsStackScreen from "./src/screens/cocktailsStackScreen/CocktailsStackScreen";

import store from "./src/redux/store";
import RandomCocktailScreen from './src/screens/cocktailsStackScreen/randomCocktailStackScreen/RandomCocktailScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Cocktails"
          tabBarOptions={{
            activeTintColor: '#CCCCFF',
            showLabel: false,
            style: { backgroundColor: "#262673" },
          }}
        >
          <Tab.Screen
            name="Cocktails"
            component={CocktailsStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  icon={faCocktail}
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Tab.Screen
            name="Random cocktail"
            component={RandomCocktailScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  icon={faRandom}
                  size={size}
                  color={color}
                />
              )
            }}
          />
          {/* <Tab.Screen name="SignUp" composearchnent={SignUp} />
        <Tab.Screen name="ResetPassword" component={ResetPassword} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
