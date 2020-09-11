import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Users from '../Containers/Users';
import User from '../Containers/User';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{animationEnabled: false, headerTitle: ''}}>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}
