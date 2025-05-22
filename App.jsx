import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import BottomNavigation from './src/navigations/BottomNavigation';
import { store } from './src/redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { loadUserFromStorage } from './src/redux/features/user/userSlice';
import ChatScreen from './src/screens/AccountScreens/ChatScreen/ChatScreen';
import SingleSkillUserDetail from './src/screens/Group&CommunityScreens/SingleSkillUserDetail';
import { setAcceptedUsers, setDeclinedUsers, setSwappedUsers } from './src/redux/features/swap/swapSlice';




const Stack = createNativeStackNavigator()
const SWAP_STORAGE_KEY = 'swap_state';
const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user); // Access login status from Redux store


  useEffect(() => {
    // Load user data from AsyncStorage
    dispatch(loadUserFromStorage());
    // Clear swap data and reset Redux slice on app start
    const clearSwapDataOnStart = async () => {
      try {
        await AsyncStorage.removeItem(SWAP_STORAGE_KEY);
        dispatch(setSwappedUsers({}));
        dispatch(setAcceptedUsers({}));
        dispatch(setDeclinedUsers({}));
      } catch (error) {
        console.error('Error clearing swap data on app start:', error);
      }
    };

    clearSwapDataOnStart();
  }, [dispatch]);
  return (

  <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'Home' : 'InitialLoading'}
        screenOptions=
        {{ headerShown: false, }}>
        {/* public screen */}
        <Stack.Screen name="InitialLoading" component={InitialLoadingScreen} />
        <Stack.Screen name="Pupil" component={PupilScreen} />
        <Stack.Screen name="Guide" component={GuideScreen} />
        <Stack.Screen name="Collaborate" component={CollaborateScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />
        <Stack.Screen name="NewPasswordSetupSuccessScreen" component={NewPasswordSetupSuccessScreen} />
        <Stack.Screen name="ProfileDetailsPartOne" component={ProfileDetailsPartOne} />
        <Stack.Screen name="ProfileDetailsPartTwo" component={ProfileDetailsPartTwo} />
        <Stack.Screen name="ProfileDetailsPartThree" component={ProfileDetailsPartThree} />

        {/* Main App (protected) */}
        {isLoggedIn && (
          <>


            <Stack.Screen name="Home" component={BottomNavigation} />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingleSkillUserDetail"
              component={SingleSkillUserDetail}
              options={{
                headerShown: false,
              }}
            />
          </>

        )}


      </Stack.Navigator>
    </NavigationContainer>
    <Toast />
  </>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
