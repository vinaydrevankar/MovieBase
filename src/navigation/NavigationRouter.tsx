import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const NavigationRouter = () => {
  return <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="home" options={{title:'MovieBase'}} component={Home} />
            <Stack.Screen name="details" options={{title:'Movie Details'}} component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
}

export default NavigationRouter;