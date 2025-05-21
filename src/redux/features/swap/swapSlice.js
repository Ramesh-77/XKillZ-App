import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SWAP_STORAGE_KEY = 'swap_state';

const initialState = {
  swappedUsers: {},
  isLoaded: false,
};

const swapSlice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    toggleSwap: (state, action) => {
      const userId = action.payload;
      state.swappedUsers[userId] = !state.swappedUsers[userId];
    },
    setSwappedUsers: (state, action) => {
      state.swappedUsers = action.payload;
      state.isLoaded = true;
    },
  },
});

export const {toggleSwap, setSwappedUsers} = swapSlice.actions;

export const loadSwapState = () => async dispatch => {
  try {
    const savedState = await AsyncStorage.getItem(SWAP_STORAGE_KEY);
    if (savedState) {
      dispatch(setSwappedUsers(JSON.parse(savedState)));
    } else {
      dispatch(setSwappedUsers({}));
    }
  } catch (error) {
    console.error('Failed to load swap state:', error);
    dispatch(setSwappedUsers({}));
  }
};

export const saveSwapState = swappedUsers => async () => {
  try {
    await AsyncStorage.setItem(SWAP_STORAGE_KEY, JSON.stringify(swappedUsers));
  } catch (error) {
    console.error('Failed to save swap state:', error);
  }
};

export default swapSlice.reducer;
