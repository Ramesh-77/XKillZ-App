// features/user/userSlice.js
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initial state of user
const initialState = {
  isLoggedIn: false,
  userInfo: null,
};

// Creating the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

// Actions
export const {login, logout, setUserInfo} = userSlice.actions;

// Async action to load user from AsyncStorage
// Async action to load user from AsyncStorage
export const loadUserFromStorage = () => async (dispatch) => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        dispatch(setUserInfo(parsedUser)); // Store user info in state
        dispatch(login(parsedUser)); // Mark user as logged in
      }
    } catch (error) {
      console.error('Error loading user from AsyncStorage:', error);
    }
  };

// Reducer
export default userSlice.reducer;
