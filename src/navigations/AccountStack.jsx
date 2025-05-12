import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyAccountScreen from '../screens/AccountScreens/MyAccountScreen';



const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName='Account'>
      <Stack.Screen 
        name="Account" 
        component={MyAccountScreen} 
        options={{ headerShown: false }} 
      />
     
    
    </Stack.Navigator>
  );
};

export default AccountStack;