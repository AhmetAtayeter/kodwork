import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Jobs from "./src/pages/Jobs/Jobs";
import Details from "./src/pages/Details/Details";
import Favorites from "./src/pages/Favorites/Favorites";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      
      screenOptions={{
        drawerActiveTintColor: '#ee534f',
        headerShown: false
      }}>
      <Drawer.Screen
        name="JobsPage"
        component={Jobs}
        options={{ title: 'Jobs', headerTitleStyle: { color: '#ee534f', fontSize: 24 } }} />
      <Drawer.Screen
        name="FavoritesPage"
        component={Favorites}
        options={{ title: 'Favorited Jobs', headerShown: false }} />
    </Drawer.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false, title: 'Jobs' }} />
        <Stack.Screen
          name="DetailsPage"
          component={Details}
          options={{ headerTitleStyle: { color: '#ee534f', fontSize: 22 }, headerTintColor: '#ee534f' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default Router