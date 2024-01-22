import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../Home/Home";
import { Productos } from "../Productos/Productos";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { createStackNavigator } from '@react-navigation/stack';
import { CarritoStack } from '../Carrito/CarritoStack';
import { useSelector } from 'react-redux';
import { Profile } from '../Profile/Profile';

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

const ProfileStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export const Menu = ({ activeScreen, onTabPress, navigation }) => {
  const productosEnCarrito = useSelector((state) => state.carrito.productos || []);
  const cantidadEnCarrito = productosEnCarrito.reduce((total, producto) => total + producto.quantity, 0);
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
      <Tab.Screen
        name="Carrito"
        component={CarritoStack}
        options={{
          tabBarLabel: 'Carrito',
          tabBarIcon: 'cart',
          tabBarBadge: cantidadEnCarrito > 0 ? cantidadEnCarrito : null,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => { onTabPress('Carrito') },
        })}
      />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: 'account-circle',
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => { onTabPress('Profile') },
          })}
        />
    </Tab.Navigator>
  );
}