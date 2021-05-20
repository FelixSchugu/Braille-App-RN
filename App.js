import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BrailleToText2 from "./src/components/BrailleToText2";
import TextToBraille from "./src/components/TextToBraille";
import HomeScreen from "./src/components/HomeScreen"
import About from "./src/components/About"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BrailleToText" component={BrailleToText2} />
        <Stack.Screen name="TextToBraille" component={TextToBraille} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
