import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { MyComponent } from "../Shared/MyComponent";
import { Screen2Component } from "../Shared/Screen2Component";

const Tab = createMaterialBottomTabNavigator();

export const Menu = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={MyComponent}
                    options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: 'home',
                    }}
                />
                <Tab.Screen
                    name="Screen2"
                    component={Screen2Component}
                    options={{
                    tabBarLabel: 'Screen 2',
                    tabBarIcon: 'page-layout-body',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}