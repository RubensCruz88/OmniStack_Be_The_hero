import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Casos from './pages/casos';
import Detalhes from './pages/detalhes';

export default function Routes(){
	return (
		<NavigationContainer>
			<AppStack.Navigator screenOptions={{headerShown: false}}>
				<AppStack.Screen name='Casos' component={Casos} />
				<AppStack.Screen name='Detalhes' component={Detalhes} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
}