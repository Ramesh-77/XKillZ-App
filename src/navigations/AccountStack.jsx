import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyAccountScreen from '../screens/AccountScreens/MyAccountScreen';
import MyProfileScreen from '../screens/AccountScreens/MyProfileScreen';




const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName='MyProfile'>
      <Stack.Screen
        name="Account"
        component={MyAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;