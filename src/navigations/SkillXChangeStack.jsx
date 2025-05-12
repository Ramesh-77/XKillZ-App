import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SkillXChangeScreen from '../screens/SkillXChange/SkillXChangeScreen';



const Stack = createNativeStackNavigator();

const SkillXChangeStack = () => {
  return (
    <Stack.Navigator initialRouteName='SkillXChange'>
      <Stack.Screen 
        name="SkillXChange" 
        component={SkillXChangeScreen} 
        options={{ headerShown: false }} 
      />
     
    
    </Stack.Navigator>
  );
};

export default SkillXChangeStack;