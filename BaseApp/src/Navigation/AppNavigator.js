import { Text, View } from "react-native"
import React from "react"
import { createStackNavigator, Header } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "../Components/BottomTab";


const Stack = createStackNavigator()

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "BottomTab" component={BottomTab} options={{ headerShown: false}}  />     
            </Stack.Navigator>

        </NavigationContainer>

       
    )
};
export default AppNavigator;