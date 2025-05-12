import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyAccountScreen from '../screens/AccountScreens/MyAccountScreen';
import MyProfileScreen from '../screens/AccountScreens/MyProfileScreen';
import ClassScheduleScreen from '../screens/AccountScreens/ClassScheduleScreen';




const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName='Account'>
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
      <Stack.Screen
        name="ClassScheduleScreen"
        component={ClassScheduleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;