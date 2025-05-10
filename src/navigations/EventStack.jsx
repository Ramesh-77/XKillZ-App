import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from '../screens/Events/EventsScreen';



const Stack = createNativeStackNavigator();

const EventStack = () => {
  return (
    <Stack.Navigator initialRouteName='Events'>
      <Stack.Screen 
        name="Events" 
        component={EventsScreen} 
        options={{ headerShown: false }} 
      />
     
    
    </Stack.Navigator>
  );
};

export default EventStack;