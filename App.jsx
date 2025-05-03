import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/AccountScreens/LoginScreen';
import RegisterScreen from './src/screens/AccountScreens/RegisterScreen';
import InitialLoadingScreen from './src/screens/LoadingScreens/InitialLoadingScreen';
import PupilScreen from './src/screens/LoadingScreens/PupilScreen';
import GuideScreen from './src/screens/LoadingScreens/GuideScreen';
import CollaborateScreen from './src/screens/LoadingScreens/CollaborateScreen';
import PasswordResetScreen from './src/screens/AccountScreens/PasswordResetModal';
import SetNewPasswordScreen from './src/screens/AccountScreens/SetNewPasswordScreen';
import NewPasswordSetupSuccessScreen from './src/screens/AccountScreens/NewPasswordSetupSuccessScreen';
import ProfileDetailsPartOne from './src/screens/AccountScreens/ProfileDetailsPartOne';
import ProfileDetailsPartTwo from './src/screens/AccountScreens/ProfileDetailsPartTwo';
import ProfileDetailsPartThree from './src/screens/AccountScreens/ProfileDetailsPartThree';




const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions=
        {{ headerShown: false, }} initialRouteName='ProfileDetailsPartThree'>
        <Stack.Screen name="InitialLoading" component={InitialLoadingScreen} />
        <Stack.Screen name="Pupil" component={PupilScreen} />
        <Stack.Screen name="Guide" component={GuideScreen} />
        <Stack.Screen name="Collaborate" component={CollaborateScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen}  />
        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen}  />
        <Stack.Screen name="NewPasswordSetupSuccessScreen" component={NewPasswordSetupSuccessScreen}  />
        <Stack.Screen name="ProfileDetailsPartOne" component={ProfileDetailsPartOne}  />
        <Stack.Screen name="ProfileDetailsPartTwo" component={ProfileDetailsPartTwo}  />
        <Stack.Screen name="ProfileDetailsPartThree" component={ProfileDetailsPartThree}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
