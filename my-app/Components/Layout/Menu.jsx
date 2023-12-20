import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../Home/Home";
import { Productos } from "../Productos/Productos";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const ProductosStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

export const Menu = ({ activeScreen, onTabPress, navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home', tabBarIcon: 'home' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => { onTabPress('Home') },
        })}
      />
      <Tab.Screen
        name="Productos"
        component={ProductosStack}
        options={{ tabBarLabel: 'Productos', tabBarIcon: 'page-layout-body' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => { onTabPress('Productos') },
        })}
      />
    </Tab.Navigator>
  );
}