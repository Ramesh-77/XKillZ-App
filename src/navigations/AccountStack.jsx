import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyAccountScreen from '../screens/AccountScreens/MyAccountScreen';
import MyProfileScreen from '../screens/AccountScreens/ProfileDetails/MyProfileScreen';
import ClassScheduleScreen from '../screens/AccountScreens/ScheduleClass/ClassScheduleScreen';
import SelectPersonScreen from '../screens/AccountScreens/SelectPersonScheduleClass/SelectPersonScreen';





const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="SelectPersonScreen"
        component={SelectPersonScreen}
        options={{ headerShown: false }}
      />
     
    </Stack.Navigator>
  );
};

export default AccountStack;