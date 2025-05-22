import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupCommunityScreen from '../screens/Group&CommunityScreens/GroupCommunityScreen';
import SingleSkillList from '../screens/Group&CommunityScreens/SingleSkillList';


const Stack = createNativeStackNavigator();

const GroupCommunityStack = () => {
  return (
    <Stack.Navigator initialRouteName='Group&Community'>
      <Stack.Screen 
        name="Group&Community" 
        component={GroupCommunityScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="SingleSkillList" 
        component={SingleSkillList} 
        options={{ 
        headerShown: false,
        }} 
      />
     
    </Stack.Navigator>
  );
};

export default GroupCommunityStack;