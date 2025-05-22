import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import { StyleSheet, View } from 'react-native';
import GroupCommunityStack from './GroupCommunityStack';
import EventStack from './EventStack';
import SkillXChangeStack from './SkillXChangeStack';
import AccountStack from './AccountStack';



const Tab = createBottomTabNavigator();

const BottomNavigation = () => (
    <Tab.Navigator
    initialRouteName='Home'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size  }) => {
                
                // for home screen
                if (route.name === 'Home') {
                    const iconName = focused ? 'home' : 'home-outline';
                    return (
                        <View style={focused ? styles.iconContainer : null}>
                            <Ionicons name={iconName} size={25} color="#fff" />
                        </View>
                    );
                }
                // for group and community screen
                if (route.name === 'Group&Community') {
                    const iconName = focused ? 'social-skillshare' : 'social-skillshare'; // Use Foundation icons
                    return (
                        <View style={ focused ? styles.iconContainer : null}>
                            <Foundation name={iconName} size={25} color="#fff" />
                        </View>
                    );
                }
                // for events screen
                if (route.name === 'Events') {
                    const iconName = focused ? 'event' : 'event'; // Use Foundation icons
                    return (
                        <View style={ focused ? styles.iconContainer : null}>
                            <MaterialIcons name={iconName} size={25} color="#fff" />
                        </View>
                    );
                }
                // for skill xchange screen
                if (route.name === 'SkillXChange') {
                    const iconName = focused ? 'swap' : 'swap'; // Use Foundation icons
                    return (
                        <View style={ focused ? styles.iconContainer : null}>
                            <AntDesign name={iconName} size={25} color="#fff" />
                        </View>
                    );
                }
                   // for profile account screen
                   if (route.name === 'Account') {
                    const iconName = focused ? 'user' : 'user'; // Use Foundation icons
                    return (
                        <View style={ focused ? styles.iconContainer : null}>
                            <AntDesign name={iconName} size={25} color="#fff" />
                        </View>
                    );
                }
                return null;
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#09B4E4',
                height: 70,
                borderTopWidth: 0,
                paddingBottom: 20,
                paddingTop: 20,
               
            },
            headerShown: false,
        })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Group&Community" component={GroupCommunityStack} />
        <Tab.Screen name="Events" component={EventStack} />
        <Tab.Screen name="SkillXChange" component={SkillXChangeStack} />
        <Tab.Screen name="Account" component={AccountStack} />

    </Tab.Navigator>
);

export default BottomNavigation;
const styles = StyleSheet.create({
   
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D84A1',
        width: 50,
        height: 50,
        borderRadius: 50,

    },  
    icon: {
        color: '#fff',
        fontSize: 25,
    },
})
