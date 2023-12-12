import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Home } from "../Home/Home";
import { Productos } from "../Productos/Productos";

const Tab = createMaterialBottomTabNavigator();

export const Menu = ( { activeScreen, onTabPress }) => {
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ tabBarLabel: 'Home', tabBarIcon: 'home'}}
            listeners={({ navigation }) => ({
              tabPress: (e) => {onTabPress('Home')},
            })}
          />
          <Tab.Screen
            name="Productos"
            component={Productos}
            options={{ tabBarLabel: 'Productos',tabBarIcon: 'page-layout-body'}}
            listeners={({ navigation }) => ({
              tabPress: (e) => {onTabPress('Productos')},
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
}