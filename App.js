import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import LoginScreen from './views/Login';
import SigninScreen from './views/Signin';
import ForgotPass from './views/ForgotPass';
import MangaScreen from './views/MangaScreen';


import TemporadaScreen from './views/MangasTemporada';
import MainScreen from "./views/MainScreen";
import SettingsScreen from "./views/SettingsScreen";
  
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

  function MyTabs() {
	return (
	  <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: '#00ccff', style:{backgroundColor: '#1a1a1a',}}}>
          
			<Tab.Screen name="Season" component={TemporadaScreen} options={{ tabBarLabel: 'Season', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="clock" color={color} size={size}/>),}}/>

			<Tab.Screen name="Home" component={MainScreen} options={{ tabBarLabel: 'Discover', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="compass" color={color} size={size}/>),}}/>

			<Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cog" color={color} size={size}/>),}}/>
	  </Tab.Navigator>
	);
  }

  function App() {
	return (
	  <NavigationContainer>
		<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false, borderColor: 'trasnparent'}}>
			<Stack.Screen name="Login" component={LoginScreen}/>

			<Stack.Screen name="Signin" component={SigninScreen}/>

			<Stack.Screen name="ForgotPass" component={ForgotPass}/>

			<Stack.Screen name="Main" component={MyTabs}/>

			<Stack.Screen name="Manga" component={MangaScreen}/>
		</Stack.Navigator>
	  </NavigationContainer>
	);
  }
export default App;