import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../Constant/Constants';
import HomeScreen from '../Screens/HomeScreen/Home';
import Screen2 from '../Screens/Screen2/Screen2';
import Screen3 from '../Screens/Screen3/Screen3';
import Screen4 from '../Screens/Screen4/Screen4';
import Screen5 from '../Screens/Screen5/Screen5';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homemain" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const Screen2Stcak = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Ridemain" component={Screen2} />
    </Stack.Navigator>
  );
};

const Screen3Stcak = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Foodmain" component={Screen3} />
    </Stack.Navigator>
  );
};

const Screen4Stcak = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Boltmain" component={Screen4} />
    </Stack.Navigator>
  );
};

const Screen5Stcak = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profilemain" component={Screen5} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Ride') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Food') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          } else if (route.name === 'Bolt') {
            iconName = focused ? 'flash' : 'flash-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={26} color={color} />;
        },
        tabBarActiveTintColor: Color.orange,
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: "white",
        },
        headerShown: false, // Ensure headers are not shown in tab screens
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Ride" component={Screen2Stcak} />
      <Tab.Screen name="Food" component={Screen3Stcak} />
      <Tab.Screen name="Bolt" component={Screen4Stcak} />
      <Tab.Screen name="Profile" component={Screen5Stcak} />
     
    </Tab.Navigator>
  );
};

export default BottomTab;
